var express = require('express');
var router = express.Router();
var meals = require('./meals')
var Meals = require('./model_meals')
var Category = require('./../categories/model_category');




router.get('/meals/:shortCategoryName', function(req, res) {
    var shortCategoryName = req.params.shortCategoryName;
    
    Promise.all([Meals.find({short_name: new RegExp(shortCategoryName, "i")}), Category.findOne({short_name: shortCategoryName})])
        .then(([meals, category]) => {

            res.json({menu_items : meals, category : category});
        })
        .catch(err =>{
            console.log(err)
            res.json(err);
        })
});


module.exports = router;