const http = require('http');
const countStudents = require('./3-read_file_async');

const Port = 1245;

const consoleArg = process.argv.slice(2);
const db = consoleArg[0];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(db);
      res.end(`${data.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.statusCode(404);
  res.end();
}).listen(Port);

module.exports = app;
