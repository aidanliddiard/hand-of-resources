const { Router } = require('express');
const Veggie = require('../models/Veggie');

module.exports = Router().get('/', async (req, res) => {
  const veggies = await Veggie.getVeggies();
  res.json(veggies);
});
