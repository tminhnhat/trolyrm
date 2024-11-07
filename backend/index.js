require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { ensureDirectoryExists, deleteFile } = require('./utils');
const { performOcr } = require('./ocr');
const { handleDocumentGeneration } = require('./document');
const { sendEmail } = require('./email');
const upload = require('./upload');

const app = express();
const uploadDir = path.join(__dirname, 'uploads');
const anhcropDir = path.join(__dirname, 'anhcrop');
const guimailDir = path.join(__dirname, 'guimail');

ensureDirectoryExists(uploadDir);
ensureDirectoryExists(anhcropDir);
ensureDirectoryExists(guimailDir);

// Middleware to check API key
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).send('Forbidden: Invalid API key.');
  }
  next();
};

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// OCR endpoint
app.post('/ocr', checkApiKey, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const ocrEngine = req.body.ocrEngine || 'google';
    const { labels, cropHints } = await performOcr(req.file.path, ocrEngine);

    const croppedImagePath = await cropImage(req.file.path, cropHints);
    deleteFile(req.file.path);

    res.send({ labels, croppedImagePath });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image.');
  }
});

// Document generation endpoint
app.post('/taofile', checkApiKey, handleDocumentGeneration);

// Email sending endpoint
app.post('/guiemail', checkApiKey, async (req, res) => {
  try {
    const { to, subject, text, filename } = req.body;
    const attachmentPath = path.join(guimailDir, filename);

    if (!fs.existsSync(attachmentPath)) {
      return res.status(400).send('Attachment file does not exist.');
    }

    await sendEmail(to, subject, text, attachmentPath);
    res.send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});