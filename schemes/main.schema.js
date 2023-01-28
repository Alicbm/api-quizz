const Joi = require('joi');

const id = Joi.number().integer();
const ask = Joi.string();
const text = Joi.string();
const replay = Joi.boolean();

const optionA = Joi.object({
  text: text.required(),
  replay: replay.required()
})

const optionB = Joi.object({
  text: text.required(),
  replay: replay.required()
})

const optionC = Joi.object({
  text: text.required(),
  replay: replay.required()
})

const optionD = Joi.object({
  text: text.required(),
  replay: replay.required()
})

const createSchema = Joi.object({
  id: id.required(),
  ask: ask.required(),
  optionA: optionA.required(),
  optionB: optionB.required(),
  optionC: optionC.required(),
  optionD: optionD.required()
})

const updateSchema = Joi.object({
  id: id.optional(),
  ask: ask.optional(),
  optionA: optionA.optional(),
  optionB: optionB.optional(),
  optionC: optionC.optional(),
  optionD: optionD.optional()
})

const getSchema = Joi.object({
  id: id.required(),
})

module.exports = { createSchema, updateSchema, getSchema }
