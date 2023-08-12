const service = require("../service/user.service");

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content can not be empty' });
  }

  const { username, firstName, lastName, email, password } = req.body;
  try {
    const result = await service.create(username, firstName, lastName, email, password);
    res.status(201).json(result);
  } catch (error) {
    res.status(error.code).send({ message: error.message });
  }

}

exports.update = async (req, res) => {

}

exports.findAll = async (req, res) => {

}

exports.findOne = async (req, res) => {

}

exports.delete = async (req, res) => {

}