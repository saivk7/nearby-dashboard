const { NotExtended } = require('http-errors');
const { Pool,Client } = require('pg')


require('dotenv').config();

const pool = new Pool()

module.exports = {
    /* connect: () => {
        console.log("opening client connection")
        client.connect()
    }, */
    async query(text, params) {
        try{
            const start = Date.now()
            const res = await pool.query(text, params)
            const duration = Date.now() - start
            console.log('executed query', { text, duration, rows: res.rowCount })
            return res

        }catch(e){
            console.log("error in db" ,e.message)
            throw e
        }
        
      },
}