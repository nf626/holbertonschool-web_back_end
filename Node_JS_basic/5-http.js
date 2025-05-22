const http = require('http');
const countStudents = require('./3-read_file_async');

const Port = 1245;

const consoleArg = process.argv.slice(2);
// terminal: node 5-http.js argv[0] = database.csv
const db = consoleArg[0];

const app = http.createServer(async (req, res) => {
  // destructuring assignment
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(db);
      res.end(`${data.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
}).listen(Port);

module.exports = app;
