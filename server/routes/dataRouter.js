var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {

    res.send("hello from data route")



});

module.exports = router;
