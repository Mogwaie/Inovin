const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findUserById(id) {
    return this.database.query(`Select * FROM ${this.table} WHERE user_id= ?`, [
      id,
    ]);
  }
}
module.exports = UserManager;
