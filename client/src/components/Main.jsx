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
    const [chng,setChng] = useState(0)

    const [center,setCenter] = useState({
        lat: 40.730610,
        lng: 	-73.935242
    });
    
    useEffect(()=>{
        /* console.log(place, "place from main")
        console.log(range,"range changed")
        console.log(results,"results changed") */

        async function fetchLatLon(place) {
      
            let url =  `http://159.65.39.80/google?placeId=${place}`;
            let config = {};
            
            if(place){
            try{
              
              const res = await fetch(url);
              console.log("center [before] is " ,center)
              if(res.ok){
                const {data} = await res.json()
                console.log(data)
                
                setCenter((center)=>{
                  center.lat = data.lat;
                  center.lng = data.lng;
                  return center
                })

                setRange(10)
                setResults(10)
                console.log("center is " ,center)
      
      
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
                    <TableComponent />
                </div>

                <div className="col col-lg-7 col-sm-12 ">
                    <SimpleMap center={center} events={events} />
                </div>
            </div>
            
        </div>
    )
}

export default Main;