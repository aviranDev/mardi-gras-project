const Product = require("./model");
const repository = require("./repository");

exports.displayProducts = (req, res) => {
  Product.find((err, docs) => {
    let productChunks = [];
    let chunkSize = 3;
    for (let i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    res.send(docs);
  })
}

exports.getProductById = async (req, res) => {
  const _id = {
    _id: req.params.id
  }
  const productDetails = await repository.getProductById(_id);
  if (!productDetails) {
    return res.status(404).send("The card is no exist");
  }
  res.send(productDetails);
}

exports.displayUserProducts = async (req, res) => {
  const userID = { user_id: req.params.id }
  const productDetails = await repository.getMyProducts(userID);
  res.send(productDetails);
}

/**
 * User authorization
 */

exports.getMyProductById = async (req, res) => {
  const _id = {
    _id: req.params.id,
    user_id: req.user._id
  }
  const productDetails = await repository.getProductById(_id);
  if (!productDetails) {
    return res.status(404).send("The card is no exist");
  }
  res.send(productDetails);
}

exports.createProduct = async (req, res) => {
  if (!req.user.biz) {
    return res.status(400).send("Only Business Customers is Allowd to create a product for sell");
  }

  const { error } = repository.validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let payload = {
    ...req.body,
    imagePath: req.body.imagePath ?
      req.body.imagePath : 'https://cdn.pixabay.com/photo/2018/05/24/04/58/tag-3425877_960_720.jpg',
    user_id: req.user._id,
  }
  let product = await repository.createProduct({
    ...payload
  });

  await product.save();
  res.send(product);
}

exports.updateProduct = async (req, res) => {
  const { error } = repository.validateProduct(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }
  const product = { _id: req.params.id, user_id: req.user._id };
  const productDetails = await repository.updateProduct(product, req.body, { new: true });
  if (!productDetails) {
    return res.status(404).send("The card is no exist");
  }
  res.send(productDetails);
};

exports.removeProduct = async (req, res) => {
  const productDetails = {
    _id: req.params.id,
    user_id: req.user._id
  }
  const product = await repository.deleteProduct(productDetails);
  if (!product) {
    return res.status(404).send("The product id was not found");
  }
  res.send(product);
};

exports.getMyProducts = async (req, res) => {
  if (!req.user.biz) {
    return res.status(401).send("Only Business Customers is Allowd to display their products");
  }

  const productID = { user_id: req.user._id };
  const productDetails = await repository.getMyProducts(productID);

  res.json(productDetails);
};