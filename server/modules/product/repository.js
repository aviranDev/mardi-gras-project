const Joi = require("joi");
const Product = require("./model");

/**
 * GET PRODUCT BY ID
 * @param {*} id 
 * @returns PRODUCT BY ITS ID
 */
async function getProductById(id) {
  const product = await Product.findOne(id);
  return product;
}

/**
 * GENERATE PRODUCT ITEM
 * @param {*} payload 
 * @returns USER'S PRODUCT 
 */
async function createProduct(payload) {
  const newProduct = await Product.create(payload);
  return newProduct
}

async function updateProduct(...productData) {
  const product = await Product.findOneAndUpdate(...productData);
  return product;
};

async function getMyProducts(userID) {
  const product = await Product.find(userID);
  return product;
}

async function deleteProduct(...productData) {
  const product = await Product.findOneAndRemove(...productData);
  return product;
}



function validateProduct(product) {
  const schema = Joi.object({
    __v: Joi.number(),
    user_id: Joi.string(),
    imagePath: Joi.string(),
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1024).required(),
    price: Joi.number().min(2).max(400).required(),
  });
  return schema.validate(product);
}

module.exports = {
  validateProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getMyProducts,
}