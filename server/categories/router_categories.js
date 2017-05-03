var express = require('express');
var router = express.Router();
var categories = require('./categories')




router.get('/categories/', function(req, res) {
    res.json(categories);
});


module.exports = router;