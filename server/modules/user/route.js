const router = require("express").Router();
const userController = require("./controller");
const authJWT = require("../../middleware/auth");


router.get('/me', authJWT, userController.userProfile);

router.put('/edit-profile', authJWT, userController.editProfile);

router.post("/", userController.createUser);

module.exports = router;