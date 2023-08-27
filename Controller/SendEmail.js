const dotenv = require("dotenv");

dotenv.config();

const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.DOMAIN,
  });
  
  const sendEmail = (data) => {
    return new Promise((resolve, reject) => {
      mailgun.messages().send(data, (error, body) => {
        if (error) {
          console.error('Error sending email:', error);
          reject(error);
        } else {
          console.log('Email sent successfully:', body);
          resolve(body);
        }
      });
    });
  };
  
  module.exports = sendEmail;
  