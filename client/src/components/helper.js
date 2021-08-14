const fetch = require('node-fetch')

const requestFunc = async ()=>{

    const R = 6371e3; // earth's mean radius in metres
    const sin = Math.sin, cos=Math.cos, acos = Math.acos;
    const π = Math.PI;


    const lat = 40.730610;    // or e.g. req.query.lat (degrees)
    const lon = -73.935242;    // or e.g. req.query.lon (degrees)
    const radius = 50000; // or e.g. req.query.radius; (metres)

    // query points within first-cut bounding box (Lat & Lon should be indexed for fast query)

    const minLat= lat - radius/R*180/π;
    const maxLat= lat + radius/R*180/π;
    const minLon= lon - radius/R*180/π / cos(lat*π/180);
    const maxLon= lon + radius/R*180/π / cos(lat*π/180);


    const URL = 'http://159.65.39.80/data'
    const sql = `
        Select *
        FROM meetup_table
        WHERE lat Between ${minLat} AND ${maxLat} AND lon between ${minLon} And ${maxLon}`

    console.log("the formed sql is ", sql)

    const resp = await fetch(URL,{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: {"query":sql}

    })

    console.log("response from URL ", resp)
}

requestFunc()
/* 
const [ pointsBoundingBox ] = await fetch(sql, params);


// add in distance d = acos( sinφ₁⋅sinφ₂ + cosφ₁⋅cosφ₂⋅cosΔλ ) ⋅ R
pointsBoundingBox.forEach(p => { p.d = acos(sin(p.Lat*π/180)*sin(lat*π/180) +
    cos(p.Lat*π/180)*cos(lat*π/180)*cos(p.Lon*π/180-lon*π/180)) * R })

// filter for points with distance from bounding circle centre less than radius, and sort
const pointsWithinCircle = pointsBoundingBox.filter(p => p.d < radius).sort((a, b) => a.d - b.d);

console.log(pointsWithinCircle); // or e.g. res.render('points', { points: pointsWithinCircle });

*/