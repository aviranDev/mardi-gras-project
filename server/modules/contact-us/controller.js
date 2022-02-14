const contactRepository = require('./repository');


exports.createContactForm = async (req, res) => {

  const { error } = contactRepository.validateContact(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let payload = {
    ...req.body,
  }
  let form = await contactRepository.createContact({
    ...payload
  });

  await form.save();
  res.send(form);
}