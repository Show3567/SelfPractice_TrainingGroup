const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
  mongoose.connect(config.get('db')).then(_ => {
    console.log('connection successful!');
  })
}

