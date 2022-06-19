const { Router } = require('express');
const Veggie = require('../models/Veggie');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const veggie = await Veggie.getById(req.params.id);
      res.json(veggie);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const veggies = await Veggie.getVeggies();
    res.json(veggies);
  });
