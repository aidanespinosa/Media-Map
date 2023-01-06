const { Router } = require("express");
const { Movie, User, Save } = require("../../models");
const movieRouter = new Router();

movieRouter.post("/movie", async (req, res) => {
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

movieRouter.get("/:id", async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      include: [{ model: User, through: Save, as: "movie" }],
    });
    if (!movieData) {
      res.status(404).json({ message: "No movie found with this id!" });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});
