/**
 * This component takes a text field and sets up an autocomplete
 * field with a given set of food preferences.
 */
import React from 'react';

export default class PreferenceAutocomplete extends React.Component {
  render () {
    const { preferences } = this.props;

    return (
      <input type="text" name="preference" />
    );
  }
}