// server.js

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.get('/data', (req, res) => {
  const fileName = req.query.n;
  const lineNumber = req.query.m;

  if (!fileName) {
    return res.status(400).send('File name (n) is required.');
  }

  const filePath = `/app/data/${fileName}.txt`;

  if (lineNumber) {
    // Reading specific line from the file
    const line = getLine(filePath, lineNumber);
    return res.send(line);
  } else {
    // Reading entire file
    const content = fs.readFileSync(filePath, 'utf-8');
    return res.send(content);
  }
});

function getLine(filePath, lineNumber) {
  const fileContent = fs.readFileSync(filePath, 'utf-8').split('\n');
  return fileContent[lineNumber - 1] || 'Line number not found.';
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
