const vision = require('@google-cloud/vision');
const Tesseract = require('tesseract.js');
const path = require('path');
const { deleteFile } = require('./utils');

const visionClient = new vision.ImageAnnotatorClient();

// Perform OCR using the specified engine
const performOcr = async (filePath, ocrEngine) => {
  if (ocrEngine === 'google') {
    const [result] = await visionClient.textDetection(filePath);
    const labels = result.textAnnotations[0].description;

    return { labels };
  } else if (ocrEngine === 'tesseract') {
    const result = await Tesseract.recognize(filePath, 'vie');
    const labels = result.data.text;
    return { labels };
  } else {
    throw new Error('Invalid OCR engine specified.');
  }
};


module.exports = {
  performOcr,
};
