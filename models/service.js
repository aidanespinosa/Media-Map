const { Model, DataTypes } = require("sequelize");

class Service extends Model { }
const sequelize = require("../config/connection");

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subscription: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  { sequelize, modelName: "service" }
);

module.exports = Service;
