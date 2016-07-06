'use strict';

import koa from 'koa';
import render from 'koa-ejs';
import bodyParser from 'koa-bodyparser';
import staticServe from 'koa-static';
import flash from 'koa-flash';
//import session from 'koa-generic-session';
//import cookieSession from 'koa-mysql-session';
//import knex from 'knex';
//import MySqlStore from 'koa-mysql-session';
import sqlConfig from './sqlConfig';
import config from './config/default';
import router from './app/router';
import errorHandler from './app/errorHandler';

let env = process.env;

if (!process.env.SQL_HOST) {
  env = require('./env');
}

const app = module.exports = koa();

// Setting up react requirements
require('node-jsx').install({harmony: true, extension: 'jsx'});

//const knexConnection = require('knex')(sqlConfig);

// https://github.com/koajs/ejs
render(app, {
  root: config.template.path,
  layout: 'layout', // global layout file .html; can be disabled by setting to false
  viewExt: 'html', // file extension to look for
  cache: false, // cache compiled templates?
  debug: true
});

app.keys = [config.session.secretKey];
app.use(bodyParser());
//app.use(flash());
//app.use(cookieSession(app));
/*
app.use(session({
  store: new MySqlStore(sqlConfig.connection),
  rolling: true,
  cookie: {
    maxage: 86400000 // one day
  }
}));
*/
router(app);
errorHandler(app);
app.use(staticServe('static', { gzip: true }));
app.listen(3000);
