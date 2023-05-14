// const server = require('./resouse/server');
// const port = 3001;

// server.listen(port);

const express = require('express');
const app = express();

const port = 3001;

app.post('/api', (req, res) => {
  console.log(111);
  
  res.send({
    info: 'hello'
  });
});

app.listen(port, (req, res, next) => {
  console.log(`listening on port ${port}...`);
});