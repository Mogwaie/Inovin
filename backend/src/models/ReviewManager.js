const AbstractManager = require("./AbstractManager");

class ReviewManager extends AbstractManager {
  constructor() {
    super({ table: "review" });
  }

  addReview(review) {
    return this.database.query(
      `insert into ${this.table} (user_name, user_last_name, user_email, message, rating ) values (?, ?, ?, ?, ?)`,
      [
        review.user_name,
        review.user_last_name,
        review.user_email,
        review.message,
        review.rating,
      ]
    );
  }
}

module.exports = ReviewManager;
