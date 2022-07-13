import Character from "../models/character.model";
import Movie from "../models/movie.model.js";

exports.createCharacter = async (req, res) => {
  const newCharacter = {
    id: req.body.id,
    picture: req.body.picture,
    name: req.body.name,
    age: req.body.age,
    weight: req.body.weight,
    history: req.body.history,
  };
  try {
    await Character.create(newCharacter);
  } catch {
    res.status(500).send({
      message: err.message || "Error unexpected while creating the character"
    });
  }
};

exports.updateCharacter = async (req, res) => {
  try {
    await Character.p
  }
}

/*
  async getCharacterById(id) {
    return await Character.findByPk(id, {
      include: {
        model: Movie,
        as: "movies",
        through: {
          attributes: [],
        },
      },
    });
  }

  async createCharacter(object) {
    const newCharacter = Character.build(object);
    return await newCharacter.save();
  }

  async editCharacterById(id, object) {
    const editedCharacter = await Character.findByPk(id);
    editedCharacter.set(object);
    return await editedCharacter.save();
  }

  async deleteCharacterById(id) {
    try {
      const deletedCharacter = await Character.findByPk(id);
      await deletedCharacter.destroy();
      return true;
    } catch {
      return false;
    }
  }
}
*/

export default charactersService;
