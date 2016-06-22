import React from 'react';
import { Link } from 'react-router';

export default class HomeComponent extends React.Component {
  render () {
    <div>
      <h2>Getting Started</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      { this.props.children }
    </div>
  }
}