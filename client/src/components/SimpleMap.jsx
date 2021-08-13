import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";
import Marker from "./Marker";
import { Loader } from '@googlemaps/js-api-loader';




export default function SimpleMap({placeId,events}){
  
  
  useEffect(()=>{
      
    async function fetchLatLon(placeId) {
      let url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJrTLr-GyuEmsRBfy61i59si0';
      let config = {};
      const response = {}
      try{

        response = await fetch(url,{
          method:'GET',
          mode:'cors',
          

        });
        console.log("res from fetch lat lon, " , response);
      }
      catch(e){
        console.log("error from fetch lat lon ", e)
      }
      
      

    }

    fetchLatLon(placeId)

  },[placeId])


  const [center,setCenter] = useState({
    lat: 40.730610,
    lng: 	-73.935242
  });

  const [zoom,setZoom] = useState(11);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();

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
          lat={ 40.730610}
          lng={-73.935242}
          text="My Marker"
        />

      </GoogleMapReact>
    </div>
  );
}