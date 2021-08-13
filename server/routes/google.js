var express = require('express');
var router = express.Router();
const {Client} = require("@googlemaps/google-maps-services-js");



require('dotenv').config();

/* GET google query of lat and lon. */
router.get('/', async function(req, res, next) {

    

    const client = new Client({});
    try{
        
        const response = await client.placeDetails({
            params:{
                place_id:req.query.placeId,
                key: process.env.GOOGLE_API
            }
        })
        
        console.log("the response from api client is ", response.data.result.geometry.location);
        res.send(JSON.stringify(response.data.result.geometry.location))

    }catch(e){
        
        res.status(400).json({"error": e.message, "details":e});


    }

    
        
  
});

module.exports = router;
