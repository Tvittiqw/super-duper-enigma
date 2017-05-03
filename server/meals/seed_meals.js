
const Meal = require('./model_meals');
const mealsJSON = require('./meals');

module.exports = function () {
    
 const listSavePromisess = mealsJSON.map((cat) => new Meal({
    description: cat.description,
    name: cat.name,
    short_name: cat.short_name,
    price_small: cat.price_small,
    price_large: cat.price_large,
    small_portion_name: cat.small_portion_name,
    large_portion_name: cat.large_portion_name
}).save());

Promise.all(listSavePromisess)
    .then(() =>{
        console.log('all saved')
    });
};