const { Router } = require("express");
const movieRouter = require("./movie");
const usersRouter = require("./user");
const saveRouter = require("./saves");
const apiRouter = new Router();

apiRouter.use("/user", usersRouter);
apiRouter.use("/movie", movieRouter);
apiRouter.use("/saves", saveRouter);

module.exports = apiRouter;
