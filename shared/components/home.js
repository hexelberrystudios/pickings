import React from 'react';
import { Link } from 'react-router';

export default class HomeComponent extends React.Component {
  render () {
    <div>
      <h1>Hexelberry Picking</h1>
      <ul>
        <li><Link to='/table'>Set a Table</Link></li>
        <li><Link to='/'>Browse Recipes</Link></li>
      </ul>
      { this.props.children }
    </div>
  }
}