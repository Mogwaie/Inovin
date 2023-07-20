const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  addRecipe(recipe) {
    return this.database.query(
      `insert into ${this.table} (cepage_name, cepage_level, user_id, session_date) values (?, ?, ?, ?)`,
      [recipe.cepage, recipe.level, recipe.user_id, recipe.session_date]
    );
  }
}

module.exports = RecipeManager;
