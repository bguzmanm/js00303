module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'id',
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'last_name',
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  },
    {
      timestamps: false,
      tableName: 'user',
    });
  return User;
}