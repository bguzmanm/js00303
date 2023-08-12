const actor = require("../controllers/actor.controller");
const router = require("express").Router();

router.get("/", actor.findAll);

module.exports = router;