const { Router } = require("express");
const jwt = require('jsonwebtoken');

const User = require('../models/users');

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.render('home')

})

pathRouter.get('/Profile', async (req, res) => {

    const { logintoken } = req.cookies;

    try {
        const data = jwt.verify(logintoken, process.env.JWT_KEY);
        console.log(data);

        const { id } = data;

        const user = await User.findByPk(id);
        const plainUser = user.get({ plain: true })

        res.render('Profile', {
            user: plainUser,
        });
    } catch (error) {
        if (error.meesage === "invalid token" || error.message === "jwt must be provided") {
            res.redirect('/')
        } else {
            console.log(error.message);
            res.status(500).end("Not good");
        }
    }

})

/*
pathRouter.get('/login', (req, res) => {
    res.render('login')

})

pathRouter.get('/signup', (req, res) => {
    res.render('signup')

})
*/

module.exports = pathRouter;
