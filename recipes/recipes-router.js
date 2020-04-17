const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: "Failed to get recipes", error });
    });
});

module.exports = router;
