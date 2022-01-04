import React from 'react';

const TableHead = ({ data }) => (
  <thead>
    <tr>
      {data.map((key, index) => (
        <th key={index}>{key}</th>
      ))}
      <th> </th>
      <th> </th>
    </tr>
  </thead>
);

export default TableHead;
