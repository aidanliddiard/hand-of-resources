const { Router } = require('express');
const Flower = require('../models/Flower');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const data = await Flower.insert(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const data = await Flower.updateById(req.params.id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Flower.delete(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
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
