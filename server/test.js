
const { Pool, Client } = require('pg')
require('dotenv').config();
// pools will use environment variables for connection information

const pool = new Client()

const queryFunc = async()=>{
    pool.connect();
    const country  = 'us';
    const queryToMeetup = `SELECT * FROM meetup_rsvp as A where A.group_country='${country}' LIMIT 10`
    
    const before = Date.now();
    pool.query(queryToMeetup, (err, res) => {
        console.log(err, res)
        
        const after = Date.now();

        console.log("time ", after-before);
        pool.end()
    
    
    })
    
    

}


queryFunc();

