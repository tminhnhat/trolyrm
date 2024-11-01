const vision = require('@google-cloud/vision');
const Tesseract = require('tesseract.js');
const { Jimp } = require('jimp');
const path = require('path');
const { deleteFile } = require('./utils');

const visionClient = new vision.ImageAnnotatorClient();
const anhcropDir = path.join(__dirname, 'anhcrop');

// Perform OCR using the specified engine
const performOcr = async (filePath, ocrEngine) => {
  if (ocrEngine === 'google') {
    const [result] = await visionClient.textDetection(filePath);
    const labels = result.textAnnotations[0].description;
    const [cropHintsResult] = await visionClient.cropHints(filePath);
    const cropHints = cropHintsResult.cropHintsAnnotation;
    return { labels, cropHints };
  } else if (ocrEngine === 'tesseract') {
    const result = await Tesseract.recognize(filePath, 'eng');
    const labels = result.data.text;
    return { labels, cropHints: null };
  } else {
    throw new Error('Invalid OCR engine specified.');
  }
};

// Crop image based on crop hints
const cropImage = async (filePath, cropHints) => {
  if (!cropHints || cropHints.cropHints.length === 0) return null;

  const cropHint = cropHints.cropHints[0];
  const vertices = cropHint.boundingPoly.vertices;
  const image = await Jimp.read(filePath);

  if (!Array.isArray(vertices) || vertices.length < 4) {
    throw new Error('Invalid vertices.');
  }

  const x = vertices[0].x || 0;
  const y = vertices[0].y || 0;
  const width = (vertices[2].x || image.bitmap.width) - x;
  const height = (vertices[2].y || image.bitmap.height) - y;

  if (width > 0 && height > 0) {
    image.crop(x, y, width, height);
  } else {
    throw new Error('Invalid crop dimensions.');
  }

  const croppedImagePath = path.join(anhcropDir, `${Date.now()}-cropped.jpg`);
  await image.writeAsync(croppedImagePath);
  return croppedImagePath;
};

module.exports = {
  performOcr,
  cropImage
};
