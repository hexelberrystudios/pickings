'use strict';

let env = process.env;

if (!process.env.SQL_HOST) {
  env = require('./env');
}

const koa = require('koa');
const app = module.exports = koa();

// Setting up react requirements
require('node-jsx').install({harmony: true, extension: 'jsx'});

const render = require('koa-ejs');
const router = require('koa-route');
const routes = require('./app/routes');
const bodyParser = require('koa-bodyparser');
const config = require('./config/default');
const staticServe = require('koa-static');
const sqlConfig = require('./sqlConfig');
const flash = require('koa-flash');
//const knex = require('knex')(sqlConfig);
const session = require('koa-generic-session');
const cookieSession = require('koa-session');
//const MySqlStore = require('koa-mysql-session');

// https://github.com/koajs/ejs
render(app, {
  root: config.template.path,
  layout: 'layout', // global layout file .html; can be disabled by setting to false
  viewExt: 'html', // file extension to look for
  cache: false, // cache compiled templates?
  debug: true
});

function errorHandler () {
  return function* (next) {
    try {
      yield next;
    } catch (e) {
      this.status = 500;
      this.body = 'internal server error';
    }
  }
}

app.keys = [config.session.secretKey];
app.use(bodyParser());
app.use(flash());
app.use(cookieSession(app));
/*
app.use(session({
  store: new MySqlStore(sqlConfig.connection),
  rolling: true,
  cookie: {
    maxage: 86400000 // one day
  }
}));
*/
routes(app);

app.use(errorHandler());
app.use(staticServe('static', { gzip: true }));
app.listen(3000);
