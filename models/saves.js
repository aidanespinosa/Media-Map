const { Model, DataTypes } = require("sequelize");

class Save extends Model { }
const sequelize = require("../config/connection");

Save.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    savedMovie: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },

  { sequelize, modelName: "save" }
);
module.exports = Save;
