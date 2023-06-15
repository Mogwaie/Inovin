const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const cepageControllers = require("./controllers/cepageControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.getAllUsers);
router.get("/users/:id", userControllers.getUserById);
router.post("/users", userControllers.createUser);
router.put("/users/:id", userControllers.updateUser);
router.delete("/users/:id", userControllers.destroy);

router.get("/cepages", cepageControllers.findAllCepages);
router.get("/cepages/:id", cepageControllers.findCepageById);
router.post("/cepages", cepageControllers.createNewCepage);
router.put("/cepages/:id", cepageControllers.editCepage);
router.delete("/cepages/:id", cepageControllers.deleteCepage);

module.exports = router;
