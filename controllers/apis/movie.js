const { Router } = require("express");
const {User, Movie, Save } = require("../../models");
const movieRouter = new Router();

/*
// GET all Movies
movieRouter.get('/', async (req, res) => {
  try {
    const movieData = await Movie.findAll();
    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single Movie
movieRouter.get('/:id', async (req, res) => {
  try {
    const movieData = await Movie.findByPk(req.params.id, {
      // JOIN with Users, using the Save through table
      include: [{ model: User, through: Save, as: 'movie_users' }]
    });

    if (!movieData) {
      res.status(404).json({ message: 'No Movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/

movieRouter.post("/", async (req, res) => {
  const { title, poster, rating, releaseDate, overview,} = req.body;
  try {
    const movie = await Movie.create({
      title,
      poster,
      rating,
      releaseDate,
      overview,

    });
    console.log('movie saved',movie);
    return res.json(movie);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});
module.exports = movieRouter;
