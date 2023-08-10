const user = require("../controller/user.controller");
const router = require("express").Router();

router.get("/", user.findAll);
router.get("/:id", user.findOne);
router.post("/", user.create);
router.patch("/", user.update);
router.delete("/", user.delete);

module.exports = router;
