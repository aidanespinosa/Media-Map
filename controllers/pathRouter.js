const { Router } = require("express");

const auth = require("../utils/auth");

const { User, Save, Movie } = require("../models");

const pathRouter = new Router();

pathRouter.get("/", (req, res) => {
  res.render("home");
});

pathRouter.get("/Profile", auth, async (req, res) => {
  const plainUser = req.user.get({ plain: true });
  //  console.log("user now",user);

  res.render("Profile", {
    user: plainUser,
    //saves
  });
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
