// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-password' // Replace with your password
  }
});

// Setup email data
let mailOptions = {
  from: 'your-email@gmail.com', // Sender address
  to: 'recipient-email@example.com', // List of recipients
  subject: 'Testing Nodemailer', // Subject line
  text: 'Hello from Node.js', // Plain text body
  html: '<b>Hello from Node.js</b>' // HTML body
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error occurred:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
