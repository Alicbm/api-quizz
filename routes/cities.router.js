const express = require('express');
const CitiesServices = require('../services/cities.services');
const validatorHandler = require('../middlewares/validator.handler');
const
  {
    createSchema,
    updateSchema,
    getSchema
  } = require('../schemes/main.schema');

const router = express.Router();
const service = new CitiesServices();

router.get('/', async (req, res) => {
  try {
    const { size } = req.query;

    const cities = await service.generate(size);
    res.json(cities)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
})

router.get('/:id',
validatorHandler(getSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const cities = await service.findOne(id);
    res.json(cities)
  } catch (err) {
    next(err)
  }
})

router.post('/',
validatorHandler(createSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const cities = await service.create(body);

    res.status(201).json(cities)
  } catch (err) {
    next(err)
  }
})

router.patch('/:id',
validatorHandler(getSchema, 'params'),
validatorHandler(updateSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const animal = await service.update(id, body)
    res.json({
      id,
      animal
    })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const animal = await service.delete(id);
    res.json({
      id,
      message: 'deleted',
      data: animal
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router;
