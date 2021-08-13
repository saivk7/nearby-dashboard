const request = require("supertest");
const app = require("../app");
const db = require('../db')

describe("GET /", () => {
  it("responds with Hello Express", (done) => {
    request(app).get("/").expect("Hello Express", done);
  })
});



describe('db connection', function(){
    
         it('responds with succesful connection', (done)=>{

            request(app).get("/data").expect("",done);
            
         });
 });