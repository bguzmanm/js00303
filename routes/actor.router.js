const actor = require("../controller/actor.controller");
const router = require("express").Router();

router.get("/", actor.findAll);
router.get("/:id", actor.findOne);
router.post("/", actor.create);
router.patch("/", actor.update);
router.delete("/:id", actor.delete);

module.exports = router;