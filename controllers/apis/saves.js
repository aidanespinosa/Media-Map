const { Router } = require("express");
const { Save, User } = require("../../models");
const saveRouter = new Router();
const auth = require('../../utils/auth')

// const jwt = require("jsonwebtoken");

saveRouter.post("/",auth, async (req, res) => {
  const { movieId, savedMovie} = req.body;
//  const { logintoken } = req.cookies;
//  let userId;

//  console.log('body is',req.body)
//  console.log('/api/saves logintoken',logintoken)
/*  try {
    const data = jwt.verify(logintoken, process.env.JWT_KEY);
    console.log(data);

    const { id } = data;

    const user = await User.findByPk(id);
    console.log('user is ',user)
    userId = user.id;

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
  */
  try {
    const save = await Save.create({
      movieId: parseInt(movieId),
      savedMovie,
    });
    console.log(save);
    return res.json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
module.exports = saveRouter;
