import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";
import Marker from "./Marker";
import { Loader } from '@googlemaps/js-api-loader';




export default function SimpleMap({placeId,events}){


  const [chng,setChng] = useState(0)

  const [center,setCenter] = useState({
    lat: 40.730610,
    lng: 	-73.935242
  });
  

  const [zoom,setZoom] = useState(11);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();
  
  
  useEffect(()=>{
      
    async function fetchLatLon(placeId) {
      let url =  `http://159.65.39.80/google?placeId=${placeId}`;
      let config = {};
      
      if(placeId){
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
          console.log("center is " ,center)

        }
      }catch(e){
        console.log("error fetching lat lon", e.message)
      }
      
      setChng(chng=>chng+1)

      

    }}

    fetchLatLon(placeId)

  },[placeId,center,chng])


  

  const handleApiLoaded = ({map,maps}) =>{
    setApiLoaded(true);
    setMap(map);
    setMaps(maps);
    console.log("map object" , map);
    console.log("maps object" , maps);
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDbx9gdXfYNG7Fsjbl7fT1hEQhALgaBiJg" ,libraries:'places'}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          text="My Marker"
        />

      </GoogleMapReact>
    </div>
  );
}