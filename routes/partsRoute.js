const express = require("express");
const router = express.Router();
const partsController = require("../controllers/partsController");

// =-=-=-=-=-=-=-=-=-=-=-=-=- Routes -=-=-=-=-=-=-=-=-=-=-=-=-= //

router.get("/", (req, res) => res.render("index")); // render the index page
router.get("/api/parts", partsController.getParts); // get all parts
router.post("/api/parts", partsController.createPart); // create a part

// TODO router.get("/api/parts/:id", partsController.getPart); // get a single part
// TODO router.put("/api/parts/:id", partsController.updatePart); // update a part
// TODO router.delete("/api/parts/:id", partsController.deletePart); // delete a part

module.exports = router;
