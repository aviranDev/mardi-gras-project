const repository = require("./repository");
const Cart = require("./model");
const Order = require('./order');

exports.addToCart = async (req, res) => {
  const productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  const product = await repository.add_product_to_cart(productId);
  if (!product) {
    return res.status(404).send("The product is not exist yet.");
  }
  cart.add(product, product.id);
  req.session.cart = cart;
  console.log(req.session.cart);
  res.send(cart);
}

exports.diplay_cart = async (req, res) => {
  if (!req.session.cart) {
    return res.send({ products: null });
  }
  const cart = new Cart(req.session.cart);
  res.send({ products: cart.generateArray(), totalPrice: cart.totalPrice, totalQty: cart.totalQty });
};

exports.removeItemFromCart = async (req, res) => {
  const productID = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.delete(productID);
  req.session.cart = cart;
  res.send(cart);
}

exports.reduceCartItem = async (req, res) => {
  const productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.send(cart);
}

exports.incrementCartItem = async (req, res) => {
  const productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.incrementByOne(productId);
  req.session.cart = cart;
  res.send(cart);
}

exports.checkout_with_payment = async (req, res) => {
  if (!req.session.cart) {
    return res.send({ products: null });
  }
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const order = await new Order({
    user_id: req.body._id,
    cart: cart,
  });

  const newOrderd = await order.save();
  req.session.cart = null;
  res.send(newOrderd)
};

