'use strict';
import React from 'react'

import {HelloMessage} from 'components/hello-world.jsx'

// Put ready for server side
let ServerHelloMessage = React.createFactory(HelloMessage);

module.exports.reactExample = function *reactExample() {
  this.body = yield this.render('home', { 'reactHTML': React.renderToString(ServerHelloMessage({name: "Anderson"})) });
};