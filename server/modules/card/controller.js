const cardRepository = require('./repository');
const Card = require("./model");

/****************************************************
 * USER CRUD
 */


/**
 * CREATE SHOP CARD
 * @param {*} req -> VALIDATIONS
 * @param {*} res -> RETUREN CARD PRODUCTION
 * @returns GENERATED COMMERCIAL SHOP CARD FOR SELLER 
 */
exports.cardProduction = async (req, res) => {
  if (!req.user.biz) {
    return res.status(400).send("Only Business Customers is Allowd to create a Market stall");
  }

  //STOP USER TO GENERATE ADDITIONAL CARD WITHOUT ERROR RESPONSE
  let user = await cardRepository.validateCardExistence({ user_id: req.user._id });
  if (user) return res.status(200).send('Card already exist');

  const { error } = cardRepository.validateCard(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let payload = {
    ...req.body,
    bizImage: req.body.bizImage ?
      req.body.bizImage : 'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png',
    bizNumber: await cardRepository.generateBizNumber(Card),
    orderByNumber: await cardRepository.generateOrderByNumber(Card),
    user_id: req.user._id,
  }

  let card = await cardRepository.createCard({
    ...payload
  });

  await card.save();
  res.send(card);
}


/**THIS CONTROLLER IS NECESSARY FOR HANDLING MULTIPLE CARDS OF A USER
 * 
 * DISPLAY USER'S OWN CARD BY JWT TOKEN MIDDLEWARE
 * 
 * THE AUTHORIZATION IS BY JWT TOKEN WHICH CAN EXPOSE THE PAYLOAD USER DATA 
 * @param {*} req FOR USER BIZ PROPERTY TO ACCESS THE DATA
 * @param {*} res USER'S OWN CARD
 * @returns DISPLAY CARD DETAILS 
 */
exports.displayMyCard = async (req, res) => {
  /**
   * AUTHENTICATE EXISTENCE OF USER BUSINESS ACCOUNT
   * IN CASE OF INVALID USER ACCOUNT RETURN RESPONSE WITH STATUS 401
   */
  if (!req.user.biz) {
    return res.status(401).send("Only Business Customers is Allowd to display their cards");
  }

  //DECLARE OF USER ID CONTENT 
  const cardID = { user_id: req.user._id };

  //BY THIS DECLERATION STATMENT FETCH FROM THE DATABASE THE CURRENT CARD ID.
  const cardDetails = await cardRepository.getMyCards(cardID);

  //RESPONSE WITH THE CARD DATA
  res.send(cardDetails);
};


/**THIS CONTROLLER IS NECESSARY FOR DISPLAYING UNQIUE INDIVIDUAL CARD DATA ONLY 
 * DISPLAY USER'S OWN CARD 
 * BY CARD ID PARAMETER
 * BY USER ID FROM THE PAYLOAD OF JWT TOKEN MIDDLEWARE  
 *  AS PARAMETER IN THE ENDPOINT
 * @param {*} req PARAMETER OF ID
 * @param {*} res CARD DATA
 * @returns DISPLAY CARD DETAILS 
 */
exports.displayMyCardById = async (req, res) => {
  const _id = {
    _id: req.params.id,
    user_id: req.user._id
  }
  /**
   * VALIDATE EXISTENCE OF A CARD DATA BY MONGOOSE REPOSITORY FUNCTION
   */
  const cardDetails = await cardRepository.getCardById(_id);
  if (!cardDetails) {
    return res.status(404).send("The card is no exist");
  }
  //RESPONSE WITH THE CARD DATA
  res.send(cardDetails);
}

/**
 * DISPLAY CARD BY ITS SERIAL NUMBER
 */
exports.displayCardBySerialNumber = async (req, res) => {
  const bizNumber = { bizNumber: req.params.biz };
  const cardDetails = await cardRepository.getCardByBizNumber(bizNumber);
  if (!cardDetails) {
    return res.status(404).send("The card is not exist.");
  }
  res.send(cardDetails);
}

/**
 * UPDATE CARD
 */
exports.updateCard = async (req, res) => {
  const { error } = cardRepository.validateCard(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const card = { _id: req.params.id, user_id: req.user._id };
  const cardDetails = await cardRepository.updateCard(card, req.body, { new: true });
  if (!cardDetails) {
    return res.status(400).send("The card is no exist");
  }
  res.send(cardDetails);
};

/**
 * REMOVE CARD
 */
exports.removeCard = async (req, res) => {
  const cardDetails = {
    _id: req.params.id,
    user_id: req.user._id
  }
  const card = await cardRepository.deleteCard(cardDetails);
  if (!card) {
    return res.status(404).send("The ID card was not found");
  }
  res.send(card);
};


/****************************************************
 * GUEST OPERATIONS
 */

/**
 * DISPLAY ALL CARDS AVAILABLE
 */
exports.displayAllCards = async (req, res) => {
  const cards = await cardRepository.getCards();

  if (cards.length < 0) {
    return res.status(404).send("There are no cards yet.")
  }

  res.send(cards);
}


/**
 * DISPLAY SINGLE CARD
 */
exports.displaySingleCard = async (req, res) => {
  const _id = {
    _id: req.params.id,
  }
  const cardDetails = await cardRepository.getCardById(_id);
  if (!cardDetails) {
    return res.status(404).send("The card is no exist");
  }
  res.send(cardDetails);
}