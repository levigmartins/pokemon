const routes = require('express').Router();

const routes_test = require('../controllers/routes_test');

routes.get('/', routes_test.get);

module.exports = routes;