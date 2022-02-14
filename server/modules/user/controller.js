const userRepository = require('./repository');
const bcrypt = require("bcryptjs");
const _ = require("lodash");

exports.createUser = async (req, res) => {
  const { error } = userRepository.validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await userRepository.validateAccountExistence({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  let userDetails = {
    ...req.body
  }
  user = await userRepository.generateUserAccount(userDetails);
  const salt = await bcrypt.genSaltSync(12);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(_.pick(user, ["_id", "name", "email"]));
};

exports.userProfile = async (req, res) => {
  const userProfile = await userRepository.getUserProfile({ _id: req.user._id });
  if (!userProfile) {
    return res.status(404).send("The user is not exist.")
  }
  res.send(userProfile);
};

exports.editProfile = async (req, res) => {
  const { error } = userRepository.validateUser(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }
  const updatedUser = { _id: req.params.id, user_id: req.user._id };
  const userDetails = await userRepository.editProfile(updatedUser, req.body, { new: true });
  if (!userDetails) {
    return res.status(404).send("The user is no exist");
  }
  res.send(userDetails);
};


exports.userSignOut = async (req, res) => {
  await res.clearCookie("jwtKey");
};