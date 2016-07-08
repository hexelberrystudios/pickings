/**
 * This component is the home page.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Hexelberry Picking</h1>
        <ul>
          <li><Link to='/table-wizard'>Set a Table</Link></li>
          <li><Link to='/'>Browse Recipes</Link></li>
        </ul>
      </div>
    );
  }
}