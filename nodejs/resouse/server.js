const http = require('http');

const server = http.createServer((req, res, next) => {
  console.log('server created!');
  if (req.url === '/') {
    console.log('base root for this listener!');
  } else if (req.url === '/api') {
    console.log('API!');
    res.write('<h1 style="color:red">Hello world</h1>');
  }
  return res.end();
});

module.exports = server;

