const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URI || 'mongodb://localhost/mardi_gras_rest_api_testing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected To mongo'))
  .catch((err) => console.log('There is some error occured', err));
