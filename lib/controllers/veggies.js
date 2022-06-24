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
  })
  .post('/', async (req, res, next) => {
    try {
      const newVeggie = await Veggie.addVeggie(req.body);
      res.json(newVeggie);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updated = await Veggie.updateVeggieById(req.params.id, req.body);
      res.json(updated);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deleted = await Veggie.deleteVeggie(req.params.id);
      res.json(deleted);
    } catch (e) {
      next(e);
    }
  });
