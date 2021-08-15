import React, { useEffect } from 'react';
import { Row, Table } from 'reactstrap';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';
import './table.css'
const DetailComp = ({row}) => {

  return(
    <Card >
        <CardHeader tag="h7" style={{ color:"white", backgroundColor: '#3f80d4', borderColor: '#99c2f5' }}>{row.group_name}</CardHeader>
        <CardBody className="card-body">
          <CardTitle className="title" > {new Date(Number.parseInt(row.event_time)).toLocaleDateString()} @ {new Date(Number.parseInt(row.event_time)).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})} </CardTitle>
          <CardText className="card-text" >{row.event_name}</CardText>
          
        </CardBody>
        <CardFooter><Button href={row.event_url} target="_blank"color="primary"  >RSVP here!</Button></CardFooter>
    </Card>
  )
}

const TableComponent = ({ tableRows }) => {

  useEffect(()=>{
    console.log("render of talbe componenet" , tableRows.length)
  })
  return (
    <Table responsive  >
      <thead>
        <tr>
          <th>#</th>
          <th>List of Events</th>
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
                <DetailComp row={row} />
          
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
