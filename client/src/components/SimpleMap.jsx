/* global google */
import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";
import Marker from "./Marker";

const range_zoom = {
  5:12,
  10:11,
  25:10,
  50:9,
  75:8,
  100:7.5,
  200:6.5
}

export default function SimpleMap({events,center,forKey,range}){
  //default zoom = 11

  const [zoom,setZoom] = useState(range_zoom[range]);
  const apiIsLoaded = (map, maps, center,radius) => {
    console.log("radius is ", radius)
    const circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.3,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.1,
      map,
      center: center,
      radius: radius
    });
  };
  
  useEffect(()=>{
    console.log("simple map render", 'center', center, ' key: ', forKey, 'zoom setting to ' , range_zoom[range])
    setZoom(range_zoom[range]);

  },[center.lat,center.lng,range])
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40rem', width: '100%' }}>
      <GoogleMapReact
        key= {forKey}
        bootstrapURLKeys={{ key: "AIzaSyAzcYFYgM-9TLbbq4Ky-9UQ921GjQKMfhE" ,libraries:'places'}}
        center={{lat:center.lat,lng:center.lng}}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => {
         
          try{
            return apiIsLoaded(map, maps, {lat:center.lat,lng:center.lng},range* 1609)
          }
          catch(e){
            console.log(e)
          }
        }}

      >

        {
          events.map((event, i)=>{
            return (
              <Marker
                index={i}
                title={event.event_name}
                group={event.group_name}
                key={'marker_'+event.lat+event.lon+ Math.random()}
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