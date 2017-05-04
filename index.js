var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

var router_categories = require('./server/categories/router_categories');
var router_meals = require('./server/meals/router_meals');
var seed_categories = require('./server/categories/seed_categories');
var seed_meals = require('./server/meals/seed_meals');


app.use(express.static('front-end'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/front-end/index.html'));
});

app.use('/api/', router_categories);
app.use('/api/', router_meals);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

mongoose.connect('mongodb://localhost/mydb');

mongoose.connection.on('connected', function () {  
  // seed_categories();
  // seed_meals();
});