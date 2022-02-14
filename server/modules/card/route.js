const router = require("express").Router();
const controller = require('./controller');
const authJWT = require("../../middleware/auth");

/****************************************************
 * USER CRUD
 */


/**
 * CARD PRODUCTION
 * JWT TOKEN PROVIDED
 */
router.post("/", authJWT, controller.cardProduction);


/**
 * DISPLAY USER'S SELLER OWN CARD
 * AUTHORIZED AND AUTHENTICATED DATA BY JWT TOKEN MIDDLEWARE.
 */
router.get("/my-card", authJWT, controller.displayMyCard);


/**
 * DISPLAY USER'S SELLER OWN INDIVIDUAL SINGLE CARD
 * AUTHORIZED AND AUTHENTICATED DATA BY JWT TOKEN MIDDLEWARE AND ID PARAMETER
 */
router.get("/own/:id", authJWT, controller.displayMyCardById);


/**
 * DISPLAY USER'S SINGLE CARD BY ITS SERIAL NUMBER
 */
router.get("/advertisement-biz-card/:biz", authJWT, controller.displayCardBySerialNumber);


/**
 * UPDATE CARD BY ITS ID 
 * AUTHORIZED AND AUTHENTICATED DATA BY JWT TOKEN MIDDLEWARE
 */
router.put("/update/:id", authJWT, controller.updateCard);


/**
 * DELETE CARD BY ID
 * ONLY THE CARD OWNER CAN DELETE CARD
 * AUTHORIZED AND AUTHENTICATED DATA BY JWT TOKEN MIDDLEWARE.
 */
router.delete("/remove-card/:id", authJWT, controller.removeCard);



/****************************************************
 * GUEST OPERATIONS
 */


/**
 * DISPLAY ALL USERS CARDS PROFILES BUSINESSES  
 */
router.get("/display-cards", controller.displayAllCards);


/**
 * DISPLAY CARD BY ITS ID
 */
router.get("/one/:id", controller.displaySingleCard);


module.exports = router;

