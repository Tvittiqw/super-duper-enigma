var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var CategorySchema = new Schema({
    url: {         
        type: String  
    
    },
    name: {
        type: String

    },
    short_name: {
        type: String
    },
    special_instructions: {
        type: String
    }
});

module.exports = mongoose.model('Category', CategorySchema);