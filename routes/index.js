const express = require('express');

const generalCultureRouter = require('./generalCulture.router')
const javascriptRouter = require('./javascript.router')
const animalsRouter = require('./animals.router')
const citiesRouter = require('./cities.router')
const sportsRouter = require('./sport.router')
const htmlRouter = require('./html.router')
const cssRouter = require('./css.router')

function routerApi (app){

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/general-culture', generalCultureRouter)
  router.use('/javascript', javascriptRouter)
  router.use('/animals', animalsRouter)
  router.use('/cities', citiesRouter)
  router.use('/sports', sportsRouter)
  router.use('/html', htmlRouter)
  router.use('/css', cssRouter)
}

module.exports = routerApi;
