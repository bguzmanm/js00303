const user = require("../restController/user.controller");
const router = require("express").Router();
const auth = require("../auth/authorization");

router.get("/", auth, user.findAll);
router.get("/:id", auth, user.findOne);
router.post("/", auth, user.create);
router.patch("/", auth, user.update);
router.delete("/", auth, user.delete);

module.exports = router;
