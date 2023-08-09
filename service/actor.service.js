const db = require("../models");

const Actor = db.actor;
const Op = db.Sequelize.Op;

exports.findAll = async () => {
  try {
    return await Actor.findAll();
  } catch (error) {
    console.error(err);
    return ({
      error: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}

exports.findOne = async (id) => {
  try {
    return await Actor.findByPk(id);
  } catch (err) {
    console.error(err);
    return ({
      error: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}