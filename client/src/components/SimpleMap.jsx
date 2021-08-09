import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import SearchBox from "./SearchBox";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  

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
        bootstrapURLKeys={{ key: "" ,libraries:'places'}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent
          lat={ 40.730610}
          lng={-73.935242}
          text="My Marker"
        />

      </GoogleMapReact>
    </div>
  );
}