const { Router } = require("express");
const { User } = require("../../models");

const jwt = require("jsonwebtoken");

const usersRouter = new Router();

usersRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (!user) {
    res.status(401).end("User not found");
    return;
  }

  if (user.password !== password) {
    res.status(401).end("Incorrect Password");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_KEY);

  res.cookie("logintoken", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.end();
});

usersRouter.post("/signup", async (req, res) => {
  const { email, firstname, lastname, username, password } = req.body;

  const user = await User.findOne({ where: { username } });

  if (user) {
    res.status(409).end("User already exist");
    return;
  }

  const newUserObject = await User.create({
    email,
    firstname,
    lastname,
    username,
    password,
  });
  console.log('creatted user',newUserObject);

  const token = jwt.sign({ id: newUserObject.id }, process.env.JWT_KEY);

  res.cookie("logintoken", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.status(200).json(newUserObject);
});

// usersRouter.get("/:id", async (req, res) => {
//   try {
//     const movieData = await Movie.findByPk(req.params.id, {
//       include: [{ model: User, through: Save, as: "movie" }],
//     });
//     if (!movieData) {
//       res.status(404).json({ message: "No movie found with this id!" });
//       return;
//     }

//     res.status(200).json(movieData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = usersRouter;
