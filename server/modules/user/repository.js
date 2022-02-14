const User = require("./model");
const Joi = require('joi');


/**
 * User Account Generating Operation
 */
function generateUserAccount(userData) {
  const newUser = User.create(userData);
  return newUser;
}

/**
 * User Authentication & Authorization Operations 
 */
function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(255).required(),
    biz: Joi.boolean().required(),
  });
  return schema.validate(user);
}

function validLoginFileds(data) {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required(),
    password: Joi.string().min(6).max(250).required(),
  });
  return schema.validate(data);
}


/**
 * DATA-BASE Authentication & Authorization Operations 
 */
async function validateAccountExistence(email) {
  const userdetails = await User.findOne(email);
  return userdetails;
}

async function getUserProfile(userData) {
  const userProfile = await User.findOne(userData).select("-password");
  return userProfile;
}

async function editProfile(...userData) {
  const updatedUser = await User.findOneAndUpdate(...userData);
  return updatedUser;
};

module.exports = {
  generateUserAccount,
  validateAccountExistence,
  validateUser,
  validLoginFileds,
  getUserProfile,
  editProfile,
}