const { Router } = require('express');
const Fungus = require('../models/Fungus');

module.exports = Router().get('/', async (req, res) => {
  const fungi = await Fungus.getFungi();
  res.json(fungi);
});
