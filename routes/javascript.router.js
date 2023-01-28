const express = require('express');
const JavascriptServices = require('../services/js.services');

const validatorHandler = require('../middlewares/validator.handler');
const
  {
    createSchema,
    updateSchema,
    getSchema
  } = require('../schemes/main.schema');

const router = express.Router();
const service = new JavascriptServices();

router.get('/', async (req, res) => {
  try {
    const { size } = req.query;

    const js = await service.generate(size);
    res.json(js)
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
    const js = await service.findOne(id);
    res.json(js)
  } catch (err) {
    next(err)
  }
})

router.post('/',
validatorHandler(createSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    const js = await service.create(body);

    res.status(201).json(js)
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
    const js = await service.update(id, body)
    res.json({
      id,
      js
    })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const js = await service.delete(id);
    res.json({
      id,
      message: 'deleted',
      data: js
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router;
