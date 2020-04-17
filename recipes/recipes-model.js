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
function getShoppingList(id) {
  return db("recipe_ingredients")
    .join("recipes", "recipe_ingredients.id", "recipe.id")
    .join("ingredients", "recipe_ingredients.ingredient_id", "ingredient.id")
    .select("recipe.name", "ingredient.name", "recipe_ingredient.qauntity")
    .where("recipe.id", id);
}

// return instructions with steps for recipe_id
function getInstructions(id) {
  return db("instructions").where("recipe_id", id);
}
