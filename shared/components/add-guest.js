/**
 * This component sets up a form for adding a new guest,
 * likely to a table.
 * 
 * @param tableId [REQUIRED] [INT]
 */
import React from 'react';
import Guest from './guest';

export default class AddGuest extends React.Component {
  render () {
    const { tableId } = this.props;

    return (
      <form action="/guest">
        <Guest/>
        <input type="hidden" name="tableId" value={tableId} />
        <button type="submit">Save</button>
      </form>
    );
  }
}