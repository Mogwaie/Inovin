const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const tasteControllers = require("./controllers/tasteControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/taste", tasteControllers.tasteBrowse);
router.get("/taste/:id", tasteControllers.read);
router.put("/taste/:id", tasteControllers.edit);
router.post("/taste", tasteControllers.add);
router.delete("/taste/:id", tasteControllers.destroy);

module.exports = router;
