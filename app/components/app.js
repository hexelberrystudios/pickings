import React from 'react';
import { RouteHandler } from 'react-router';

export default class AppComponent extends React.Component {
  render () {
    return (
      <div>
        <h2>Getting Started</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}