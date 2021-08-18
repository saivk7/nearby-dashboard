import './table.css'
import React, { useEffect } from 'react';

import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

//for each event row from the events database, we render a card
const DetailComp = ({row}) => {

  return(
    <Card  >
        <CardHeader tag="h6" style={{ color:"white", backgroundColor: '#3f80d4', borderColor: '#99c2f5' }}>{row.event_name}</CardHeader>
        <CardBody className="card-body">
          <CardTitle className="title" > {new Date(Number.parseInt(row.event_time)).toLocaleDateString()} @ {new Date(Number.parseInt(row.event_time)).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})} </CardTitle>
          <CardText className="card-text" >{row.group_name}</CardText>
          
        </CardBody>
        <CardFooter> 
            <Button  size="sm" href={row.event_url} target="_blank"color="primary"  >RSVP here!</Button> 
            {`  `}
            <Button size="sm" color="success">No. of Attending: {row.response_yes}</Button> 
            {`  `}
            {row.response_no>0 && <Button size="sm" color="danger">Not Attending: {row.response_no}</Button>}     
        </CardFooter>
        
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
                        <DetailComp row={row} key={`card_${row.lat} _${row.lon}`} />
                    )
                })
            }

        </div>
    )
}

export default CardList;
