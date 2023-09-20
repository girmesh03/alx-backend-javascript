const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 5421;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else {
    let data = 'This is the list of our students\n';
    try {
      await countStudents(process.argv[2])
        .then((result) => {
          data += result;
        })
        .catch((error) => {
          data += error.message;
        });
      res.end(data);
    } catch (error) {
      res.end(error.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
