const userRepository = require('./repository');
const bcrypt = require("bcryptjs");

exports.createUserId = async (req, res) => {
  const { error } = userRepository.validLoginFileds(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await userRepository.validateAccountExistence({ email: req.body.email });
  if (!user) {
    return res.status(400).send('Invalid email or password');
  }

  const isPassValid = await bcrypt.compareSync(req.body.password, user.password);
  if (!isPassValid) {
    return res.status(400).send('Invalid email or password');
  }

  const token = user.generateAuthToken();
  res.send({
    token,
  })
};

exports.userProfile = async (req, res) => {
  const userProfile = await userRepository.getUserProfile({ _id: req.user._id });
  if (!userProfile) {
    return res.status(404).send("The user is not exost.")
  }
  res.send(`Welcome Aboard ${userProfile.name} !`);
};
