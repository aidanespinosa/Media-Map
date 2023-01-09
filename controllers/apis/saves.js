const { Router } = require("express");
const { Save} = require("../../models");
const saveRouter = new Router();
const auth = require('../../utils/auth')

// const jwt = require("jsonwebtoken");

saveRouter.post("/",auth, async (req, res) => {
  const {savedMovie} = req.body;

  try {
    const save = await Save.create({
    savedMovie: savedMovie,   
    });
    console.log(save);
    return res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
module.exports = saveRouter;
