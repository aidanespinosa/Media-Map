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

    savedMovie: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      } 
    },

    movieId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'movie',
        key: 'id',
        unique: false
      } 
    },
  
  },

  { sequelize, modelName: "save" }
);
module.exports = Save;
