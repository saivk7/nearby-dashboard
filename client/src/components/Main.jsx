import googleMapReact from 'google-map-react';
import React, { useEffect, useRef, useState,componentDidMount } from 'react';
import Options from './Options';
import SimpleMap from './SimpleMap';
import TableComponent from './Table';

const API = 'AIzaSyC9DQpoXnuGd6mWgnxP2YfLojwLvEZ9wEY'


const Main = () =>{

    const [events,SetEvents] = useState()
    const [place, setPlace] = useState("New York");

    
    

    return(


        <div className="container"> 
            <div className="row input-row">
                <div className="col-6">
                    <Options />
                </div>

            </div>

            <div className="row table row">
                <div className="col col-6"> 
                    <TableComponent />
                </div>
                <div className="col col-6 ">
                    <SimpleMap/>
                </div>
            </div>
            
        </div>
    )
}

export default Main;