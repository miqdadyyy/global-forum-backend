var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { notFoundHandler, errorHandler } = require('./middlewares')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Handler route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Globel Forum API 🎉'
    })
});

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app;
