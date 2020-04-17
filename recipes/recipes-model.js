const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
};

function getRecipes() {
  return db("recipes");
}
