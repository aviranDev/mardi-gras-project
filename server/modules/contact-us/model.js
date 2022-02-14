const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contact_us = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
});

const Contact = mongoose.model('Contact', contact_us);

module.exports = Contact;