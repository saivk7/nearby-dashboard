import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";
import Marker from "./Marker";





export default function SimpleMap({events,center}){

  const [zoom,setZoom] = useState(11);
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDbx9gdXfYNG7Fsjbl7fT1hEQhALgaBiJg" ,libraries:'places'}}
        center={{lat:center.lat,lng:center.lng}}
        defaultZoom={zoom}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          
        />

      </GoogleMapReact>
    </div>
  );
}