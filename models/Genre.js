module.exports = (sequelize, type) => {
  return sequelize.define(
    "Genre",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: type.STRING,
    },
    {
      freezeTableName: true,
    }
  );
};
