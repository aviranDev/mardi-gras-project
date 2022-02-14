const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order_Schema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  cart: {
    type: Object,
    required: true,
  },
  /* 
 address: {
   type: String,
   minlength: 2,
   maxlength: 400,
   required: true
 },
 telephone: {
   type: String,
   required: true,
   minlength: 9,
   maxlength: 10
 }, */
  /* paymentId: {
    type: String,
    required: true
  } */
});

const Order = mongoose.model('Order', order_Schema);

module.exports = Order;