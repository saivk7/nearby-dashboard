import React from 'react';

export const requestFunc = async (center,range,limit) =>{
    /* 

    Given a center, this asunc function fetches and returns the list of events around
    the center withing the specified radius 

    */
    // REF : https://www.movable-type.co.uk/scripts/latlong-db.html

    
    if(!center) return null;
    
    const R = 6371e3; // earth's mean radius in metres
    const sin = Math.sin, cos=Math.cos, acos = Math.acos;
    const π = Math.PI;

    const lat = center.lat;    // or e.g. req.query.lat (degrees)
    const lon = center.lng;    // or e.g. req.query.lon (degrees)
    const radius = Number.parseInt(range)* 1609.34; // or e.g. req.query.radius; (metres)
    const limit_no = limit

    // query points within first-cut bounding box (Lat & Lon should be indexed for fast query)

    const minLat= lat - radius/R*180/π;
    const maxLat= lat + radius/R*180/π;
    const minLon= lon - radius/R*180/π / cos(lat*π/180);
    const maxLon= lon + radius/R*180/π / cos(lat*π/180);


    const URL = 'http://159.65.39.80/data'
    const sql = `SELECT * FROM meetup_table WHERE (lat BETWEEN ${minLat} AND ${maxLat}) AND (lon BETWEEN ${minLon} AND ${maxLon}) LIMIT ${limit_no}`

    console.log("the formed sql is ", sql, "range", radius)

    const resp = await fetch(URL,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify({"query":sql})

    })
    const respBody = await resp.json()
    
    const resultRows = respBody.rows;
    
    console.log("resultRows" , resultRows)

    return resultRows;
    
    
}

/* 
const [ pointsBoundingBox ] = await fetch(sql, params);


// add in distance d = acos( sinφ₁⋅sinφ₂ + cosφ₁⋅cosφ₂⋅cosΔλ ) ⋅ R
pointsBoundingBox.forEach(p => { p.d = acos(sin(p.Lat*π/180)*sin(lat*π/180) +
    cos(p.Lat*π/180)*cos(lat*π/180)*cos(p.Lon*π/180-lon*π/180)) * R })

// filter for points with distance from bounding circle centre less than radius, and sort
const pointsWithinCircle = pointsBoundingBox.filter(p => p.d < radius).sort((a, b) => a.d - b.d);

console.log(pointsWithinCircle); // or e.g. res.render('points', { points: pointsWithinCircle });

*/