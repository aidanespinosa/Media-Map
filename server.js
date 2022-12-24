//require("dotenv").config();

const express = require("express");

const { engine } = require('express-handlebars');

//const sequelize = require("./config/connection");

const mainRouter = require("./controllers");

const app = express();

const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(mainRouter);
app.use(express.static('public'));

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

//sequelize.sync().then(() => {

    app.listen(PORT, () => {
        console.log("Listening on http://localhost:" + PORT);
    });
//});
