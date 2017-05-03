var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var MealsSchema = new Schema({
      
    short_name: {
        type: String

    },
    name: {
        type: String
    },
    description: {
        type: String
    },
     price_small: {         
        type: String  
    
    },
    price_large: {
        type: String

    },
    small_portion_name: {
        type: String
    },
    large_portion_name: {
        type: String
    }
});


module.exports = mongoose.model('Meals', MealsSchema);