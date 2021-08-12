import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";
import Marker from "./Marker";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap({props}){
  

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