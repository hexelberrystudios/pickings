'use strict';

if (!process.env.SQL_HOST) {
    var env = require('./env');
}

var sqlConfig = require('./sqlConfig');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./app/routes');
var flash = require('connect-flash');
var session = require('express-session');
var knex = require('knex')(sqlConfig);
var KnexSessionStore = require('connect-session-knex')(session);
var sessionStore = new KnexSessionStore({ tablename: 'sessions', knex: knex });
// refer to https://github.com/expressjs/session for documentation
var sessionConfig = {
    resave: true,
    saveUninitialized: false,
    secret: 'gravelervoltorbmewtwocharmander',
    store: sessionStore,
    cookie: { 
        secure: false,
        expires: 3600000 * 24 * 12
    }
};

if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    // requires HTTPS
    sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(session(sessionConfig));
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', './static/views');
// init api routes
routes(app);

app.use(serveStatic('static'));
// var multer = require('multer');
// app.use(multer()); // for parsing multipart/form-data (uploading files)
app.listen(3000);
