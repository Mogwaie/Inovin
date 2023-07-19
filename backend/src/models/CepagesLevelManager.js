const AbstractManager = require("./AbstractManager");

class CepagesLevelManager extends AbstractManager {
  constructor() {
    super({ table: "cepage_level" });
  }

  update(cepageLevel) {
    return this.database.query(
      `update ${this.table} set level = ? where cepage_id = ?`,
      [cepageLevel.level, cepageLevel.cepage_id]
    );
  }
}

module.exports = CepagesLevelManager;
