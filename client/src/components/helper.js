import React from 'react';

const getWithoutDuplicates= (arr)=>{
    var seen  = {} //using a hashtable for filetering already seen groups
    return arr.filter(row=>{
        if(seen.hasOwnProperty(row.group_name)){
            //console.log(seen.hasOwnProperty(row.group_name), row.group_name, "from filter")
            return false;
        }else{
            seen[row.group_name] = true;
            return true;
        }
    })

}

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
    const limit_no = Number.parseInt(limit) + 20;

    // query points within first-cut bounding box (Lat & Lon should be indexed for fast query)

    const minLat= lat - radius/R*180/π;
    const maxLat= lat + radius/R*180/π;
    const minLon= lon - radius/R*180/π / cos(lat*π/180);
    const maxLon= lon + radius/R*180/π / cos(lat*π/180);


    const URL = 'http://159.65.39.80/data'
    const sql = `select event_name,event_url,event_time,group_name,sum(case when response='yes' then 1 else 0 end) as response_yes, sum(case when response='no' then 1 else 0 end) as response_no,lon, lat  FROM meetup_table group by event_name,event_url, event_time,group_name,lat, lon having (lat BETWEEN ${minLat} AND ${maxLat}) AND (lon BETWEEN ${minLon} AND ${maxLon}) LIMIT ${limit_no}`

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
    
    console.log("resultRows first" , resultRows)
    resultRows.forEach(p=> { p.d = acos(sin(p.lat*π/180)*sin(lat*π/180) +cos(p.lat*π/180)*cos(lat*π/180)*cos(p.lon*π/180-lon*π/180)) * R })
    
    const pointsWithinCircle = resultRows.filter(p => p.d < radius).sort((a, b) => a.d - b.d);
    const withoutDuplicateGroup = getWithoutDuplicates(pointsWithinCircle)
    console.log("resultRows after filtering duplicates" , withoutDuplicateGroup)
    return withoutDuplicateGroup.slice(0,limit);
    
    
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