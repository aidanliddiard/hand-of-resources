const Router = require('express');
const Tree = require('../models/Tree');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const tree = await Tree.getTreeById(req.params.id);
      res.json(tree);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res) => {
    const trees = await Tree.getTrees();
    res.json(trees);
  })
  .post('/', async (req, res, next) => {
    try {
      const newTree = await Tree.insertTree(req.body);
      res.json(newTree);
    } catch (e) {
      next(e);
    }
  });
