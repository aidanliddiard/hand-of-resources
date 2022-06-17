const { Router } = require('express');
const Fruit = require('../models/Fruit');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const fruit = await Fruit.getById(req.params.id);
      res.json(fruit);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const fruits = await Fruit.getFruits();
    res.json(fruits);
  });
