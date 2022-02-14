const Product = require("../product/model");
const Joi = require('joi');

/**
 * ADD PRODUCT TO CART
 * @param {*} productId 
 * @returns PRODUCT BY ITS ID AND ADD IT TO CART
 */
async function add_product_to_cart(productId) {
  const product = await Product.findById(productId);
  return product;
}


/**
 * ORDER VALIDATION CHECKOUT-FROM
 */
function validateCheckoutForm(checkout_form) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    address: Joi.string().min(2).max(400).required(),
    telephone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
  });
  return schema.validate(checkout_form);
}

module.exports = {
  add_product_to_cart,
  validateCheckoutForm,
}