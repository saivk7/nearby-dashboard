import React from 'react';
import { Table } from 'reactstrap';

const TableComponent = (props) => {
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Group Name</th>
          <th>Date</th>
          <th>Location</th>
          <th> People going</th>
          <th> State</th>
          <th> URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark </td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>California</td>
          <td>http://localhost:3000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>oot</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableComponent;
