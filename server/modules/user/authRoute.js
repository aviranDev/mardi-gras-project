const router = require("express").Router();
const userAuthorized = require("./authorization");
const authJWT = require("../../middleware/auth");

// router.get('/me', authJWT, userAuthorized.userProfile);

router.post("/", userAuthorized.createUserId);

module.exports = router;