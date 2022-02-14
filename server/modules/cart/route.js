const router = require("express").Router();
const controller = require("./controller");
const authJWT = require("../../middleware/auth");

/**
 * ADD PRODUCT TO CART
 */
router.get("/add-to-cart/:id", controller.addToCart);

/**
 * DISPLAY CART ITEMS
 */
router.get("/shopping-cart", controller.diplay_cart);

/**
 * REDUCE ITEM QUANTITY BY 1 
 */
router.get("/reduce-cart-item/:id", controller.reduceCartItem);

/**
 * INCREMENT ITEM QUANTITY BY 1
 */
router.get("/increment-cart-item/:id", controller.incrementCartItem);

/**
 * REMOVE ITEM FROM A CART LIST
 */
router.delete("/delete-product-from-cart/:id", controller.removeItemFromCart);

/**
 * CHECKOUT PAYMENT SESSION CART
 * DELEVER CART ITEMS LIST TO ORDERS
 * ONLY REGISTERD USER CAN CHECKOUT
 */
router.post("/checkout-payment", authJWT, controller.checkout_with_payment);

module.exports = router;