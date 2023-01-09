const { Model, DataTypes } = require("sequelize");

class Stream extends Model { }
const sequelize = require("../config/connection");

Stream.init({}, { sequelize });

module.exports = Stream;
