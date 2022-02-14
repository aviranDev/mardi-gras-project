const router = require("express").Router();
const controller = require("./controller");

router.get("/enter-admin", controller.adminEntery);

module.exports = router;