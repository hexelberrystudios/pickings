/**
 * This component lists a set of food preferences for a user
 * to select or deselect.
 */
import React from 'react';

export default class PreferenceList extends React.Component {
  render () {
    const { preferences } = this.props;

    return (
      <div>{preferences.map(function (preference) {
        let label = "pref_" + preference.name;
        return (
          <label htmlFor={label} key={preference.id}>
            <input id={label} type="checkbox"/>
            {preference.name}
          </label>
          )})}
      </div>
    );
  }
}