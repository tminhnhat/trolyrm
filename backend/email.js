const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // Lấy dịch vụ email từ biến môi trường
  auth: {
    user: process.env.EMAIL_USER, // Email của bạn
    pass: process.env.EMAIL_PASS  // Mật khẩu email của bạn
  }
});

// Send email with attachment
const sendEmail = (to, subject, text, attachmentPath) => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments: [
        {
          path: attachmentPath
        }
      ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info);
    });
  });
};

module.exports = {
  sendEmail
};