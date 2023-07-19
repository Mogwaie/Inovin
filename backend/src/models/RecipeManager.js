const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  addRecipe(recipe) {
    return this.database.query(
      `insert into ${this.table} (cepage_id, cepage_level) values (?, ?)`,
      [recipe.cepage_id, recipe.level]
    );
  }
}

module.exports = RecipeManager;
