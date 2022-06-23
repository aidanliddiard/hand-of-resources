const Router = require('express');
const Tree = require('../models/Tree');

module.exports = Router().get('/', async (req, res) => {
  const trees = await Tree.getTrees();
  res.json(trees);
});
