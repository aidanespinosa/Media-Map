const { Router } = require("express");
const { User, Movie, Save } = require("../../models");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usersRouter = new Router();
/*

// GET all Users
usersRouter.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single User
usersRouter.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      // JOIN with Movies, using the Save through table
      include: [{ model: Movie, through: Save, as: 'saved_movies' }]
    });

    if (!userData) {
      res.status(404).json({ message: 'No User found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/

usersRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username },
  });

  console.log(user.password);
  console.log(user);


  if (!user) {
    res.status(404).end("User not found");
    return null;
  } 

  const checkPassword = await bcrypt.compare(
    password,
    user.password,
  )
  console.log(checkPassword);

  if (!checkPassword) {
    res.status(401).end("Incorrect Password");
    return null;
  } else {
    res.status(200)
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

  console.log(password);

  const user = await User.findOne({ where: { username} });
  const userEmail = await User.findOne({ where: { email} });
  const validEmail = await validator.isEmail(email);
  const validPassword = await validator.isLength(password,{ min:5})
  console.log(validEmail); 
  console.log(validPassword); 

  if (user) {
    res.status(409).end("User Already Exist");
    return;
  } else if (userEmail) {
    res.status(403).end("Email Already In Use");
    return;
  } else if (!validEmail){
    res.status(406).end("Email Not Valid");
    return; 
  } else if (!validPassword){
    res.status(411).end("Password length Is Minimum Is 5 Characters");
    return; 
  }


  const newUserObject = await User.create({
    email,
    firstname,
    lastname,
    username,
    password,
  });
  console.log('created user',newUserObject);

  const token = jwt.sign({ id: newUserObject.id }, process.env.JWT_KEY);

  res.cookie("logintoken", token, {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.status(200).json(newUserObject);
});


module.exports = usersRouter;
