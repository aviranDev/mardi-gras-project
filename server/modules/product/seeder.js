const Product = require("./model");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mardi_gras_rest_api_testing');

let products = [
  new Product({
    imagePath: "https://cdn.pixabay.com/photo/2017/04/01/22/23/mar-di-gras-2194595__480.jpg",
    title: "Mardi Gras Mask with feathers",
    description: "New Orleans Best Mask Store of masks",
    price: 12.90
  }),
  new Product({
    imagePath: "https://mydesignsinthechaos.com/wp-content/uploads/2019/01/MDC-Mama-needs-a-mardi-rita-mock-up-with-logo-01-01-300x300.png",
    title: "Mardi Gras T-shirt",
    description: "New Orleans Best T-shirts Store of masks with huge amount of items",
    price: 19.90
  }),
  new Product({
    imagePath: "https://s7.orientaltrading.com/is/image/OrientalTrading/FXBanner_808/mardi-gras-top-hats~13756548.jpg",
    title: "Mardi Gras hat",
    description: "New Orleans Best Store of Mardi Gras merchandise",
    price: 7.90
  }),
  new Product({
    imagePath: "https://m.media-amazon.com/images/I/71sNwxVsrdS._AC_UL320_.jpg",
    title: "Mardi Gras T-shirt",
    description: "New Orleans Best Store of Mardi Gras merchandise",
    price: 14.90
  }),
  new Product({
    imagePath: "https://partycity2.scene7.com/is/image/PartyCity/_sq_?$_500x500_$&$product=PartyCity/762828_full",
    title: "Mardi Gras bow tie",
    description: "New Orleans Best Store",
    price: 9.90
  }),
  new Product({
    imagePath: "https://m.media-amazon.com/images/I/81cRmsAIqnL._AC_SL1500_.jpg",
    title: "Mardi Gras tablecloth",
    description: "New Orleans Best Store",
    price: 4.90
  }),
  new Product({
    imagePath: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_500x500_$&$product=PartyCity/608427",
    title: "Mardi Gras Mask",
    description: "New Orleans Best Store",
    price: 19.90
  }),
  new Product({
    imagePath: "https://ginatepper.com/wp-content/uploads/2021/02/Gold-Mask.jpg",
    title: "Mardi Gras Mask with feathers",
    description: "New Orleans Best Store",
    price: 29.90
  }),
  new Product({
    imagePath: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_500x500_$&$product=PartyCity/P709305",
    title: "Mardi Gras Jacket",
    description: "New Orleans Best Store",
    price: 99.90
  }),
  new Product({
    imagePath: "https://www.johnstuxedos.com/wp-content/uploads/2018/05/FullSizeRender-2.jpg",
    title: "Mardi Gras Vest",
    description: "New Orleans Best Store",
    price: 59.90
  }),
];

let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i].save((err, result) => {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

