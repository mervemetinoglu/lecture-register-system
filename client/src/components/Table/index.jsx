import './table.scss';
import React from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';

const Table = ({ values, callback, columnNames }) => (
  <div className="table__wrapper">
    <table>
      <TableHead data={columnNames} />
      <TableBody data={values} callback={callback} />
    </table>
  </div>
);

export default Table;
