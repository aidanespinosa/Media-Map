const { Router } = require("express");

const User = require('../../models/users')
const usersRouter = new Router();

usersRouter.post("/login", async (req, res) => {
    
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (!user) {
        res.status(401).end('User not found');
        return;
    }

    res.end();

});

usersRouter.post("/signup", async (req, res) => {

    const { email, firstname, lastname, username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (user) {
        res.status(409).end('User already exist');
        return;
    }

    const newUserObject = await User.create({
        email,
        firstname,
        lastname,
        username,
        password,
    })

    res.status(200).json(newUserObject);

});

module.exports = usersRouter;