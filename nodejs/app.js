// const server = require('./resouse/server');
// const port = 3001;

// server.listen(port);

const express = require('express');
const app = express();
const todolist = require('./routers/todolist.ts');

require('./start/db.js')();

const port = 3001;

app.use(express.json());
app.use('/todos', todolist);

// app.get('/todos', (req, res) => {
//   res.send(mydb.todolist);
// });

app.listen(port, (req, res, next) => {
  console.log(`listening on port ${port}...`);
});