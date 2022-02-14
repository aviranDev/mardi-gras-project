const Contact = require("./model");
const Joi = require('joi');
const _ = require("lodash");

async function createContact(payload) {
  const newContact = await Contact.create(payload);
  return newContact
}
function validateContact(form) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required(),
    message: Joi.string().min(2).max(400).required(),
  });
  return schema.validate(form);
}

module.exports = {
  createContact,
  validateContact,
}
