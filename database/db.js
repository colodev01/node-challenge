const Sequelize = require("sequelize");
const UserModel = require("../models/User");
const MovieModel = require("../models/Movie");
const CharacterModel = require("../models/Character");
const GenreModel = require("../models/Genre");

const sequelize = new Sequelize("nodechallenge", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);
const Character = CharacterModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log("Tablas sincronizadas");
});

module.exports = {
  User,
  Movie,
  Character,
  Genre,
};
