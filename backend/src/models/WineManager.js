const AbstractManager = require("./AbstractManager");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wine" });
  }
}

module.exports = WineManager;
