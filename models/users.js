const { Model, DataTypes } = require("sequelize");
const validator = require("validator");

class User extends Model {}
const sequelize = require("../config/connection");

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      validate: {
        isEmail(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid Email");
          }
        },
      },
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
