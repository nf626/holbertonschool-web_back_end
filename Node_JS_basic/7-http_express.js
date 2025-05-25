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
  try {
    const data = await countStudents(db);
    const msg1 = 'This is the list of our students';
    const msg2 = `${data.join('\n')}`;
    res.send(`${msg1}${msg2}`);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log(`port: ${port} running`);
});

module.exports = app;
