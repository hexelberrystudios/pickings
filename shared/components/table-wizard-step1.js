import React from 'react';
import Table from './table';

export default class TableWizardStep1 extends React.Component {
  render () {
    return (
      <form action="/table-wizard/step2">
        <Table/>
        <button type="submit">Next</button>
      </form>
    );
  }
}