const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_Schema = new Schema({
  imagePath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Product = mongoose.model('Product', product_Schema);

module.exports = Product;