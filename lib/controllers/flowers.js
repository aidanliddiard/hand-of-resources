const { Router } = require('express');
const Flower = require('../models/Flower');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const flower = await Flower.getFlowersById(req.params.id);
      res.json(flower);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const flowers = await Flower.getFlowers();
    res.json(flowers);
  });
