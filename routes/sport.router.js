const express = require('express');
const SportsServices = require('../services/sport.services');

const validatorHandler = require('../middlewares/validator.handler');
const
  {
    createSchema,
    updateSchema,
    getSchema
  } = require('../schemes/main.schema');

const router = express.Router();
const service = new SportsServices();

router.get('/', async (req, res) => {
  try {
    const { size } = req.query;

    const sports = await service.generate(size);
    res.json(sports)
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
    const sports = await service.findOne(id);
    res.json(sports)
  } catch (err) {
    next(err)
  }
})

router.post('/',
validatorHandler(createSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const sports = await service.create(body);

    res.status(201).json(sports)
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
    const sports = await service.update(id, body)
    res.json({
      id,
      sports
    })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const sports = await service.delete(id);
    res.json({
      id,
      message: 'deleted',
      data: sports
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router;
