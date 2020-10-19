const categories = []


function createCategory(new_category){
    categories.push(new_category);
}

function getCategories(){return categories;}

module.exports = {createCategory,getCategories}