import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import koaRoute from 'koa-route';
import routes from '../shared/routes';

export default function (app) {
  app.use(koaRoute.get('/', function *(next) {
    let reactString;
console.log(routes);
console.log(this.path);
    match({ routes: React.createFactory(routes), location: this.path }, (error, redirectLocation, props) => {
      console.log('props');
      console.log(props);
      if (error) {
        // an error has occurred, let the error handler take care of it, if it hasn't already
        // @TODO: Test error 500
        this.throw(error.message, 500);
      } else if (redirectLocation) {
        // we matched a ReactRouter redirect, so redirect from the server
        this.redirect(redirectLocation.pathname + redirectLocation.search);
      } else if (props) {
        console.log(props);
        reactString = renderToString(RouterContext(props));
      } else {
        console.log('NOT FOUND');
        //this.throw('Not Found', 404);
      }
    });

    yield this.render('layout', { markup: reactString });
    yield next;

    //yield this.render('home', { username: 'Anderson' });
  }));
};