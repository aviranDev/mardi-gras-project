const Admin = require("./model");

exports.adminEntery = async (req, res) => {
  let admin = new Admin(req.session.admin ? req.session.admin : {});

  req.session.admin = admin;
  res.send(admin);
};


