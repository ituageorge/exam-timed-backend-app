require('rootpath')();
const config = require('config.json');
const mongoose = require('mongoose');
const errorHandler = require('./error-handler');

// const handleError = require('./error-handler');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true,
        useUnifiedTopology: true,
      useFindAndModify: false };

mongoose.connect(
    process.env.MONGODB_URI || 
    config.connectionString, connectionOptions)
    .catch(error => errorHandler(error));

mongoose.Promise = global.Promise;


module.exports = {
    User: require('../users/userModel')
}