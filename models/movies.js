const { Model, DataTypes } = require("sequelize");

class Movie extends Model { }
const sequelize = require("../config/connection");

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "movie",
  }
);

module.exports = Movie;
