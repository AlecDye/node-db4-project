exports.up = function (knex) {
  return (
    knex.schema
      // Recipes table
      .createTable("recipes", (tbl) => {
        tbl.string("id", 255).primary();
        tbl.string("name", 255).notNullable().unique();
      })
      // Instructions table
      .createTable("instructions", (tbl) => {
        tbl.string("id", 255).primary();
        tbl.float("step_order").notNullable();
        tbl.string("step", 255).notNullable();
        // Foreign key (recipes)
        tbl
          .string("recipe_id", 255)
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
      // Ingredients table
      .createTable("ingredients", (tbl) => {
        tbl.string("id", 255).primary();
        tbl.string("name", 255).notNullable();
      })
      // Recipe_ingredients (junction) table
      .createTable("recipe_ingredients", (tbl) => {
        tbl.string("id", 255).primary();
        // Foreign keys (recipe & ingredients)
        tbl
          .string("recipe_id", 255)
          .notNullable()
          .references("id")
          .inTable("receipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .string("ingredients_id", 255)
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        // Quantity (of ingredients)
        tbl.float("quantity").notNullable();
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes");
};
