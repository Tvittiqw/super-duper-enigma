var express = require('express');
var router = express.Router();
var categories = require('./categories');
var Category = require('./model_category')




router.get('/categories/', function(req, res) {
    Category.find({})
        .then(data =>{
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
});


module.exports = router;