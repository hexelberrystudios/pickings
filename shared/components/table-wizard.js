/**
 * This component is the shell with which all the wizard
 * steps will flow through. This wizard is for setting a table
 * with a set of guests.
 */
import React from 'react';

export default class TableWizard extends React.Component {
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}