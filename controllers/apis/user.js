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
    console.log(req.body);

    res.end();

});

module.exports = usersRouter;