import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";
import Marker from "./Marker";





export default function SimpleMap({events,center,forKey}){

  const [zoom,setZoom] = useState(11);
  
  useEffect(()=>{
    console.log("simple map render", 'center', center, ' key: ', forKey)
  },[center.lat,center.lng])
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40rem', width: '100%' }}>
      <GoogleMapReact
        key= {forKey}
        bootstrapURLKeys={{ key: "AIzaSyDbx9gdXfYNG7Fsjbl7fT1hEQhALgaBiJg" ,libraries:'places'}}
        center={{lat:center.lat,lng:center.lng}}
        defaultZoom={zoom}
      >

        {
          events.map(event=>{
            return (
              <Marker
                lat={event.lat}
                lng={event.lon}
              />

            )
            
          })


        }
        

      </GoogleMapReact>
    </div>
  );
}