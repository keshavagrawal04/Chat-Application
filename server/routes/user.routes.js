const router = require("express").Router();
const { userController } = require("../controllers");

router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);

module.exports = router;
