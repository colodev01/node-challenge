const Sequelize = require("sequelize");

//Traemos los modelos para luego exportarlos
const UserModel = require("../models/user.model");
const MovieModel = require("../models/movie.model");
const CharacterModel = require("../models/character.model");
const GenreModel = require("../models/genre.model");

//Traemos la configuracion de la base de datos
const dbConfig = require("../config/db.config");

//Aplicamos la configuracion una instancia de Sequelize
const sequelize = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USERNAME,
  dbConfig.DB_PASSWORD,
  {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.DB_DIALECT,
  }
);

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
