const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  addRecipe(recipe) {
    return this.database.query(
      `insert into ${this.table} (cepage_id, cepage_level, user_id, session_date) values (?, ?, ?, ?)`,
      [recipe.cepage_id, recipe.level, recipe.userId, recipe.session_date]
    );
  }
}

module.exports = RecipeManager;
