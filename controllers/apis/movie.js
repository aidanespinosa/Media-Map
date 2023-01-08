const { Router } = require("express");
const { Movie } = require("../../models");
const movieRouter = new Router();

movieRouter.post("/", async (req, res) => {
  const { title, poster, rating, releaseDate, overview } = req.body;
  try {
    const movie = await Movie.create({
      title,
      poster,
      rating,
      releaseDate,
      overview,
      
    });
    return res.json(movie);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
module.exports = movieRouter;
