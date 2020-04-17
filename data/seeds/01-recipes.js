exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Grilled Cheese" },
    { name: "Soup" },
    { name: "Burrito" },
  ]);
};
