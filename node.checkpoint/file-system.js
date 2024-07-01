const fs = require('fs');

// Writing to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created successfully');
});

// Reading from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data read from welcome.txt:', data);
});
