const db = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = db.user;
const Op = db.Sequelize.Op;

require("dotenv").config();

exports.signUp = async (username, password, firstName, lastName, email) => {
  try {
    // generamos un fragmento aleatorio para ser usado en el password
    const salt = await bcryptjs.genSalt(process.env.SALT);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const result = await User.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email
    });
    return result;

  } catch (err) {
    console.error(err);
    return ({
      code: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}

exports.singIn = async (username, password) => {

  try {
    const foundUser = await User.findOne({ where: { username } });
    console.log(foundUser);



    if (!foundUser) {
      return ({
        code: 400,
        message: 'user not found',
      });
    }

    const correctPassword = await bcryptjs.compare(password, foundUser.password);
    if (!correctPassword) {
      return ({
        code: 400,
        message: 'wrong password',
      });
    }
    // generar token
    // 1. el payload es el objeto que contrendrá el id del usuario.
    const payload = { user: { id: foundUser.id } };
    // 2. firmar el jwt
    const token = jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600000
      }
    );
    return token;
  } catch (err) {
    console.error(err);
    return ({
      code: err.code || 500,
      message: err.message || 'Some error ocurred while retrieving actors.',
    });
  }
}