/**
 * This component is a form for updating a guest.
 */
import React from 'react';

export default class UpdateGuest extends React.Component {
  render () {
    const {guest, ...props} = this.props;

    let submitUrl = "/guest/" + guest.id; 

    return (
      <form action={submitUrl}>
        <Guest guest={guest}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}