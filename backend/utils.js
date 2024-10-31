const fs = require('fs');

// Ensure directories exist
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

// Delete file
const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Failed to delete file:', err);
    } else {
      console.log('Uploaded file deleted successfully.');
    }
  });
};

// Save document to file system
const saveDocument = (filePath, content) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  fs.writeFileSync(filePath, content);
};

module.exports = {
  ensureDirectoryExists,
  deleteFile,
  saveDocument
};