import googleMapReact from 'google-map-react';
import React, { useEffect, useRef, useState,componentDidMount } from 'react';
import Options from './Options';
import SimpleMap from './SimpleMap';
import TableComponent from './Table';



const Main = () =>{

    const [events,SetEvents] = useState()
    const [place, setPlace] = useState("New York");
    const [range,setRange] = useState(100)
    const [results,setResults] = useState(10)
    
    useEffect(()=>{
        console.log(place, "place from main")
        console.log(range,"range changed")
        console.log(results,"results changed")


    },[place,range,results])

    return(


        <div className="container"> 
            <div className="row input-row">
                <div className="col">
                    <Options place={place} setPlace={setPlace} range={range} results={results} setRange={setRange} setResults = {setResults}/>
                </div>

            </div>

            <div className="row table row">
                <div className="col col-6"> 
                    <TableComponent />
                </div>
                <div className="col col-6 ">
                    <SimpleMap placeId={place} events={events} />
                </div>
            </div>
            
        </div>
    )
}

export default Main;