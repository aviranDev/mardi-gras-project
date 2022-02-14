const router = require("express").Router();
const controller = require("./controller");
const authJWT = require("../../middleware/auth");

router.get('/display-products', controller.displayProducts);

router.get("/display-one-product/:id", controller.getProductById);

router.get("/display-user-products/:id", controller.displayUserProducts);

/**
 * User authorization
 */
router.get("/my-products", authJWT, controller.getMyProducts);

router.get("/display-my-product/:id", authJWT, controller.getMyProductById);

router.post("/create-product", authJWT, controller.createProduct);

router.put("/update-product/:id", authJWT, controller.updateProduct);

router.delete("/remove-product/:id", authJWT, controller.removeProduct);

module.exports = router;