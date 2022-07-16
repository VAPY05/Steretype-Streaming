const routes = require('express').Router();
const User = require('./models/User')

const moviesController = require('./controllers/movies')
const UserController = require('./controllers/user')

routes.use(moviesController)
routes.use(UserController)

module.exports = routes