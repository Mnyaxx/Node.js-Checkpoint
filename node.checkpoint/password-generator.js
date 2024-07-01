// password-generator.js
const generatePassword = require('generate-password');

// Generate a password
const password = generatePassword.generate({
  length: 12,
  numbers: true
});

console.log('Generated Password:', password);
