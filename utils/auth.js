const jwt = require("jsonwebtoken");

const User = require("../models/users");
const Movie = require("../models/movies")

module.exports = async (req, res, next) => {
  const { logintoken } = req.cookies;

  try {
    const data = jwt.verify(logintoken, process.env.JWT_KEY);
    console.log(data);

    const { id } = data;

    const user = await User.findOne({ where: { id }, include: Movie });
    if (!user) {
      res.redirect("/");
      return;
    }

    req.user = user;
    next();

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
};
