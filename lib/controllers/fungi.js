const { Router } = require('express');
const Fungus = require('../models/Fungus');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const fungus = await Fungus.getById(req.params.id);
      res.json(fungus);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const fungi = await Fungus.getFungi();
    res.json(fungi);
  })
  .post('/', async (req, res, next) => {
    try {
      const newFungus = await Fungus.addFungus(req.body);
      res.json(newFungus);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updated = await Fungus.updateFungus(req.params.id, req.body);
      res.json(updated);
    } catch (e) {
      next(e);
    }
  });
