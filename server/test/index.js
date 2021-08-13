const request = require("supertest");
const app = require("../app");
const db = require('../db')
const {Client} = require("@googlemaps/google-maps-services-js");
var expect = require('chai')

require('dotenv').config();
describe("GET /", () => {
  it("responds with Hello Express", (done) => {
    request(app).get("/").expect("Hello Express", done);
  })
});

describe("GET /google", () => {
  it("responds with a latitude and logitude",   (done) => {
    
    request(app).get('/google').query({placeId:"ChIJrTLr-GyuEmsRBfy61i59si0"})
    .expect({"lat":-33.8676569,"lng":151.2017213},done())
  })
});
