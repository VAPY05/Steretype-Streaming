const routes = require('express').Router();

const moviesController = require('./src/controllers/movie')
const UserController = require('./src/controllers/user')

routes.use(moviesController)
routes.use(UserController)

module.exports = routes