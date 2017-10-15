var mongoose = require('mongoose');

// Pour que mongoose travaille avec les Promises au lieu des callbacks
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};