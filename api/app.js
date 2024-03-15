const createError = require('http-errors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();

// SQLite database setup
const dbPath = path.join(__dirname, 'data', 'db.sqlite');
const db = new sqlite3.Database(dbPath);

if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = process.env.ENV === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

db.run('CREATE TABLE IF NOT EXISTS tourdeapp (record TEXT)');
db.close();

module.exports = app;
