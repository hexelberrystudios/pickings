/**
 * This component lists a set of guests, likely
 * belonging to a table.
 */
import React from 'react';

export default class GuestList extends React.Component {
  render () {
    const { guests } = this.props;

    return (
      <ul>{guests.map(guest =>
        <li key={guest.id}>{guest.name}</li>)}
      </ul>
    );
  }
}