const { Router } = require("express");
const { Save } = require("../../models");
const saveRouter = new Router();

saveRouter.post("/", async (req, res) => {
  const { userId, movieId } = req.body;
  try {
    const save = await Save.create({
      userId,
      movieId,
    });
    return res.json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
module.exports = saveRouter;
