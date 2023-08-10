const db = require("../models");

const User = db.user;
const Op = db.Sequelize.Op;

exports.findAll = async () => {
  try {
    return await User.findAll()
  } catch (error) {
    console.error(error);
    return ({
      error: error.code || 500,
      message: error.message || 'Some error ocurred while retrieving actors.',
    });
  }
}

exports.findOne = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (err) {
    console.error(err);
    return ({
      error: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}

exports.create = async (username, firstName, lastName, email, password) => {
  try {
    return await User.create({ username, firstName, lastName, email, password });
  } catch (error) {
    console.error(err);
    return ({
      error: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}

exports.update = async (id, username, firstName, lastName, email, password) => {
  try {
    return await User.update({ id, username, firstName, lastName, email, password });
  } catch (error) {
    console.error(err);
    return ({
      error: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}

exports.delete = async (id) => {
  try {
    return await User.delete(id);
  } catch (error) {
    console.error(err);
    return ({
      error: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}