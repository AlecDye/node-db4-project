const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

// return list of recipes
function getRecipes() {
  return db("recipes");
}

// return all ingredients and quantities for recipe_id
function getShoppingList() {}

// return instructions with steps for recipe_id
function getInstructions() {}
