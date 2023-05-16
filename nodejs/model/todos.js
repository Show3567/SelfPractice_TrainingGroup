const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true
  }, 
  completed: {
    type: Boolean,
    required: true
  }
});

const Todo = mongoose.model('todo', todoSchema);

module.exports.Todo = Todo;