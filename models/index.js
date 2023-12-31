const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.actor = require("./actor.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);

module.exports = db;

