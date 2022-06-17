const { Router } = require('express');
const Fruit = require('../models/Fruit');

module.exports = Router().get('/', async (req, res) => {
  const fruits = await Fruit.getFruits();
  console.log(fruits);
  res.json(fruits);
});
