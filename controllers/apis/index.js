const { Router } = require("express");

const usersRouter = require("./user");

const apiRouter = new Router();

apiRouter.use('/user', usersRouter);

module.exports = apiRouter;