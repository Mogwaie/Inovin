const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const cepageControllers = require("./controllers/cepageControllers");
const profiltaste = require("./controllers/profileTasteManager");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/cepages", cepageControllers.findAllCepages);
router.get("/cepages/:id", cepageControllers.findCepageById);
router.post("/cepages", cepageControllers.createNewCepage);
router.put("/cepages/:id", cepageControllers.editCepage);
router.delete("/cepages/:id", cepageControllers.deleteCepage);

router.get("/profiltaste", profiltaste.findAllTasteProfile);
router.get("/profiltaste/:id", profiltaste.findTasteProfileById);
router.post("/profiltaste", profiltaste.createNewTasteProfile);
router.put("/profiltaste/:id", profiltaste.editTasteProfile);
router.delete("/profiltaste/:id", profiltaste.deleteTasteProfile);

module.exports = router;
