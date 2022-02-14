const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  bizName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  bizDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024
  },
  bizAddress: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400
  },
  bizPhone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10
  },
  bizImage: {
    type: String,
    required: true,
  },
  bizNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999,
    unique: true
  },
  orderByNumber: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99999999999,
    unique: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
