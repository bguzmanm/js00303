const actor = require("../controller/actor.controller");
const router = require("express").Router();
const auth = require("../auth/authorization");

router.get("/", auth, actor.findAll);
router.get("/:id", auth, actor.findOne);
router.post("/", auth, actor.create);
router.patch("/", auth, actor.update);
router.delete("/:id", auth, actor.delete);

module.exports = router;