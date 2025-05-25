const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const consoleArg = process.argv.slice(2);
const db = consoleArg[0];
console.log(db);

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const data = await countStudents(db);
    res.send(`${msg}${data.join('\n')}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`port: ${port} running`);
});

module.exports = app;
