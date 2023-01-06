const { Model } = require("sequelize");

class Save extends Model {}
const sequelize = require("../config/connection");

Save.init(
  {},

  { sequelize }
);
module.exports = Save;
