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

router.get("/:id/shoppinglist", (req, res) => {
  const id = req.params.id;
  Recipes.getShoppingList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Failed to get shopping list", error });
    });
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;
  Recipes.getInstructions(id)
    .then((steps) => {
      res.status(200).json(steps);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Failed to get instructions", error });
    });
});

module.exports = router;
