const sequelize = require("sequelize");

module.exports = (sequelize, type) => {
  return sequelize.define(
    "Character",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      picture: {
        type: type.STRING,
      },
      name: {
        type: type.STRING,
        allowNull: false,
      },
      age: type.STRING,
      weight: type.STRING,
      history: type.TEXT,
    },
    {
      freezeTableName: true,
    }
  );
};
