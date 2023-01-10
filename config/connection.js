require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  console.log("SETTING DB USING URL",process.env.DATABASE_URL);
  sequelize = new Sequelize(process.env.DB_URL,options={dialect:'postgres'});
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}



module.exports = sequelize;
