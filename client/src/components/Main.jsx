import googleMapReact from 'google-map-react';
import React, { useEffect, useRef, useState,componentDidMount } from 'react';
import Options from './Options';
import SimpleMap from './SimpleMap';
import TableComponent from './Table';

import { requestFunc } from './helper';


const Main = () =>{

    const [events,SetEvents] = useState([])
    const [place, setPlace] = useState("ChIJOwg_06VPwokRYv534QaPC8g");
    const [range,setRange] = useState(25)
    const [results,setResults] = useState(10)

    const [center,setCenter] = useState({
        lat: 40.730610,
        lng: 	-73.935242
    });
    
    useEffect(()=>{
        /* console.log(place, "place from main")
        console.log(range,"range changed")
        console.log(results,"results changed") */
        console.log("main render")
        async function fetchLatLon(place) {
      
            let url =  `http://159.65.39.80/google?placeId=${place}`;
            let config = {};
            
            if(place){
            try{
              
              const res = await fetch(url);
              console.log("center [before] is " ,center)
              if(res.ok){
                const {data} = await res.json()
                console.log("data for lat lng from api", data)
                
                setCenter((center)=>{
                    center.lat = data.lat
                    center.lng = data.lng
                    return {...center}
                })

                
                console.log("center [after] is " ,center, "range", range, "results" ,results)
                console.log("calling database for results rows")
                const tableRows = await requestFunc(center,range,results) //replace with range after wards
                SetEvents(tableRows)
              }
            }catch(e){
              console.log("error fetching lat lon", e.message)
            }
      
          }}
      
        fetchLatLon(place)

    },[place,range,results])



    return(


        <div className="container"> 
            <div className="row input-row">
                <div className="col">
                    <Options place={place} setPlace={setPlace} range={range} results={results} setRange={setRange} setResults = {setResults}/>
                </div>

            </div>

            <div className="row table " >
                <div className="col col-lg-5 col-sm-12" style={{border:"1px solid black"}}> 
                    <TableComponent tableRows={events} />
                </div>

                <div className="col col-lg-7 col-sm-12 ">
                    <SimpleMap forKey={center.lat+ ' ' + center.lng} events={events} center={center} events={events} />
                </div>
            </div>
            
        </div>
    )
}

export default Main;