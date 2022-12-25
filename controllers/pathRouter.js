const { Router } = require("express");

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.render('home')

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
