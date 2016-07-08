/**
 * This component display's a guest's details, including their name,
 * and their food preferences.
 */
import React from 'react';
import PreferenceList from './preference-list';
import PreferenceAutocomplete from './preference-autocomplete';

const preferences = [
  {
    id: 1,
    name: 'Gluten'
  },
  {
    id: 2,
    name: 'Meat'
  },
  {
    id: 3,
    name: 'Dairy'
  }
];

export default class Guest extends React.Component {
  render () {
    const {guest, ...props} = this.props;

    return (
      <div>
        <div>
          <input type="text" defaultValue={guest.name}/>
          <span>does not eat</span>
          <PreferenceAutocomplete preferences={preferences}/>
          <button type="button">Add Preference</button>
        </div>
        <PreferenceList preferences={preferences}/>
      </div>
    );
  }
}