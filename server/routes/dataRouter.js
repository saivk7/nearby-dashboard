var express = require('express');
var router = express.Router();

const db = require('../db')

require('dotenv').config();
// pools will use environment variables for connection information

router.post('/', async function(req, res, next) {

    try{
        
        const response = await db.query(req.body.query)
        
        res.status(200).send(JSON.stringify(response))
    }
    catch(e){
        res.status(400).json({"error": e.message, "details":e});
        return;
    }
    
});

module.exports = router;
