const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
<<<<<<< HEAD
class User extends Model {}
=======
const validator = require("validator");

class User extends Model { }
>>>>>>> f43802472ba75bc1861a1b2dd505751105dc8e5a
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
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  },
);

module.exports = User;
