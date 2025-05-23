const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}).listen(port, () => {
  console.log(`port: ${port} running`);
});

module.exports = app;
