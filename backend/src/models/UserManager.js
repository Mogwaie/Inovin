const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  addUser(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, address, zip_code, city, job, is_admin ) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.address,
        user.zip_code,
        user.city,
        user.job,
        user.is_admin,
      ]
    );
  }

  updateUser(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?,   email = ?, address = ?, zip_code = ?, city = ?, job = ?, is_admin =? where user_id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.address,
        user.zip_code,
        user.city,
        user.job,
        user.is_admin,
        user.user_id,
      ]
    );
  }
}
module.exports = UserManager;
