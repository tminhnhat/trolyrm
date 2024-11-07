const carbone = require('carbone');
const path = require('path');
const { saveDocument } = require('./utils');

// Generate document using Carbone
const generateDocument = (templatePath, data) => {
  return new Promise((resolve, reject) => {
    carbone.render(templatePath, data, { convertTo: 'docx' }, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

const handleDocumentGeneration = async (req, res) => {
  try {
    const datachung = req.body;
    const data = datachung.data;
    if (!data) {
      return res.status(400).send('No data provided.');
    }

    const templatePath = path.join(__dirname, 'maubieu', `${datachung.tenmaubieu}.docx`);
    const outputFilePath = path.join(__dirname, 'ketqua', `${datachung.tenfileduoctao}.docx`);

    const result = await generateDocument(templatePath, datachung.data);
    saveDocument(outputFilePath, result);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.send(result);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request.');
  }
};

module.exports = {
  handleDocumentGeneration
};