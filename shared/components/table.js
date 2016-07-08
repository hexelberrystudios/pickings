/**
 * This component displays a table that a user has set,
 * complete with who is coming.
 */
import React from 'react';
import { Link } from 'react-router';
import GuestList from './guest-list';

const guests = [
  {
    id: 1,
    name: 'Joe'
  },
  {
    id: 2,
    name: 'Yorda'
  }
]

export default class Table extends React.Component {
  render () {
    return (
      <div>
        <h1>Table</h1>
        <GuestList guests={guests}/>
        <Link to="/add-guest">Add Guest</Link>
      </div>
    );
  }
}