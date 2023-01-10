const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { User,Save,Movie } = require("../models");

const pathRouter = new Router();

pathRouter.get("/", (req, res) => {
  res.render("home");
});

pathRouter.get("/Profile", async (req, res) => {
  const { logintoken } = req.cookies;

  try {
    const data = jwt.verify(logintoken, process.env.JWT_KEY);
    console.log(data);

    const { id } = data;

    const user = await User.findOne({where:{id},include: Movie});
    const plainUser = user.get({ plain: true });
    console.log("user now",plainUser);

    res.render("Profile", {
      user: plainUser,
      movies: plainUser.movies
      //saves
    });
  } catch (error) {
    if (
      error.meesage === "invalid token" ||
      error.message === "jwt must be provided"
    ) {
      res.redirect("/");
    } else {
      console.log(error.message);
      res.status(500).end("Not good");
    }
  }
});

/*
pathRouter.get('/login', (req, res) => {
    res.render('login')

})

pathRouter.get('/signup', (req, res) => {
    res.render('signup')

})
*/

module.exports = pathRouter;
