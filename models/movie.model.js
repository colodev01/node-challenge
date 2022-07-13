module.exports = (sequelize, type) => {
  return sequelize.define(
    "Movie",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      picture: {
        type: type.STRING,
      },
      title: {
        type: type.STRING,
      },
      releaseDate: {
        type: type.STRING,
      },
      calification: {
        type: type.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
};
