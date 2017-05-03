var express = require('express');
var router = express.Router();
var meals = require('./meals')




router.get('/meals/', function(req, res) {
    res.json(meals);
});


module.exports = router;