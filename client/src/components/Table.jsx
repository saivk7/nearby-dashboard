import React from 'react';
import { Table } from 'reactstrap';

const TableComponent = (props) => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Event Name</th>
          <th>Date</th>
          <th>Location</th>
          <th>Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark </td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>oot</td>
          <td>1</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;
