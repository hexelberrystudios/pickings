import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

import AppComponent from './components/app';
import IndexComponent from './components/index';
import AboutComponent from './components/about';
/*
const routes = [
  {
    path: '/',
    component: AppComponent,
    childRoutes: [
      { 
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  }
]
*/

export default (
    <Router>
      <Route path="/" component={AppComponent}>
        <Route path="about" component={AboutComponent} />
        <Route path="index" component={IndexComponent} />
      </Route>
    </Router>
)
