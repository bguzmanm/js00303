module.exports = (sequelize, Sequelize) => {
  const Actor = sequelize.define("actor", {
    actorId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'actor_id',
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
  },
    {
      timestamps: false,
      tableName: 'actor',
    }
  );
  return Actor;
}