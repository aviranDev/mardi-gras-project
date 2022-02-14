const router = require("express").Router();
const contactController = require("./controller");

router.post("/contact-us", contactController.createContactForm);

module.exports = router;