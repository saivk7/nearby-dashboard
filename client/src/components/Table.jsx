import React, { useEffect } from 'react';
import { Row, Table } from 'reactstrap';

const TableComponent = ({ tableRows }) => {

  useEffect(()=>{
    console.log("render of talbe componenet" , tableRows.length)
  })
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
      {
        tableRows &&
        <tbody>
          {

          tableRows.map((row,i) => {

            return (
              <tr key={'row_'+i}>
                <th scope="row">{i+1}</th>
                <td>{row.event_name} </td>
                <td>{row.event_time}</td>
                <td>{row.event_url}</td>
                <td>{row.group_city}</td>
          
              </tr>
            )

            
          })
        }
        </tbody>
        
      }
      {/* <tbody>
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
      </tbody> */}
    </Table>
  );
}

export default TableComponent;
