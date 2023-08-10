const auth = require("../controller/auth.controller");
const router = require("express").Router();

router.post("/signUp/", auth.signUp);
router.post("/signIn/", auth.singIn);

module.exports = router;
