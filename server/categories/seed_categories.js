
const Categorie = require('./model_category');
const categoriesJSON = require('./categories');

module.exports = function () {
    
 const listSavePromises = categoriesJSON.map((cat) => new Categorie({
    url: cat.url,
     name: cat.name,
      short_name: cat.short_name,
      special_instructions: cat.special_instructions
}).save());

Promise.all(listSavePromises)
    .then(() =>{
        console.log('all saved')
    });
};
