import './table.css'
import React, { useEffect } from 'react';

import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';


const DetailComp = ({row}) => {

  return(
    <Card >
        <CardHeader tag="h7" style={{ color:"white", backgroundColor: '#3f80d4', borderColor: '#99c2f5' }}>{row.group_name}</CardHeader>
        <CardBody className="card-body">
          <CardTitle className="title" > {new Date(Number.parseInt(row.event_time)).toLocaleDateString()} @ {new Date(Number.parseInt(row.event_time)).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})} </CardTitle>
          <CardText className="card-text" >{row.event_name}</CardText>
          
        </CardBody>
        <CardFooter> <Button href={row.event_url} target="_blank"color="primary"  >RSVP here!</Button></CardFooter>
        
    </Card>
  )
}


const CardList = ({ tableRows }) => {

    useEffect(() => {
        console.log("render of card List componenet", tableRows.length)
    })
    return (
        <div>

            {tableRows &&
                tableRows.map((row,i) => {
                    return (
                        <DetailComp row={row} />
                    )
                })
            }

        </div>
    )
}

export default CardList;
