const express = require("express");
const { hashPassword, verifyPassword } = require("./middlewares/auth");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const cepageControllers = require("./controllers/cepageControllers");
const reviewControllers = require("./controllers/reviewControllers");
const tasteControllers = require("./controllers/tasteControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("/users", hashPassword, userControllers.createUser);
router.put("/users/:id", userControllers.updateUser);
router.delete("/users/:id", userControllers.destroy);
router.post(
  "/login",

  userControllers.getUserByEmailWithPasswordAndPassToNext,

  verifyPassword
);

router.get("/cepages", cepageControllers.findAllCepages);
router.get("/cepages/:id", cepageControllers.findCepageById);
router.post("/cepages", cepageControllers.createNewCepage);
router.put("/cepages/:id", cepageControllers.editCepage);
router.delete("/cepages/:id", cepageControllers.deleteCepage);

router.get("/tastes", tasteControllers.tasteBrowse);
router.get("/tastes/:id", tasteControllers.read);
router.put("/tastes/:id", tasteControllers.edit);
router.post("/tastes", tasteControllers.add);
router.delete("/tastes/:id", tasteControllers.destroy);

router.get("/reviews", reviewControllers.getAllReviews);
router.post("/reviews", reviewControllers.createNewReview);

module.exports = router;
