const Card = require("./model");
const Joi = require('joi');
const _ = require("lodash");

async function createCard(payload) {
  const newCard = await Card.create(payload);
  return newCard
}

async function getCards() {
  const card = await Card.find();
  return card;
}

async function getMyCards(userID) {
  const card = await Card.find(userID);
  return card;
}

async function getCardById(id) {
  const card = await Card.findOne(id);
  return card;
}

async function getCardByBizNumber(bizNumber) {
  const card = await Card.findOne(bizNumber);
  return card;
}

async function updateCard(...cardDetails) {
  const card = await Card.findOneAndUpdate(...cardDetails);
  return card;
};

async function deleteCard(...cardDetails) {
  const card = await Card.findOneAndRemove(...cardDetails);
  return card;
}

/**
 * Card Operations
 */
function validateCard(card) {
  const schema = Joi.object({
    _id: Joi.string(),
    bizNumber: Joi.string(),
    orderByNumber: Joi.string(),
    __v: Joi.number(),
    user_id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024)
  });
  return schema.validate(card);
}

async function generateBizNumber(Card) {
  while (true) {
    let randomNumber = _.random(1000, 9999999);
    let card = await Card.findOne({ bizNumber: randomNumber });
    if (!card) return String(randomNumber);
  }
}

async function generateOrderByNumber(Card, num = 0) {
  while (true) {
    num++;
    let card = await Card.findOne({ orderByNumber: num });
    if (!card) return String(num);
  }
}

async function validateCardExistence(userDetails) {
  const cardDetails = await Card.findOne(userDetails);
  return cardDetails;
}



module.exports = {
  getCards,
  validateCard,
  generateBizNumber,
  generateOrderByNumber,
  createCard,
  getCardById,
  getCardByBizNumber,
  updateCard,
  getMyCards,
  deleteCard,
  validateCardExistence,
}
