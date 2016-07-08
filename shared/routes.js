import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';

import Home from './components/home';
import TableWizard from './components/table-wizard';
import TableWizardStep1 from './components/table-wizard-step1';
import Guest from './components/guest';

export default (
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/table-wizard" component={TableWizard}>
      <IndexRoute component={TableWizardStep1}/>
      <Route path="step1" component={TableWizardStep1}/>
    </Route>
    <Route path="/add-guest" component={Guest}/>
  </Router>
)
