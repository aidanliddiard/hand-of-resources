const pool = require('../utils/pool');

class Fruit {
  id;
  name;
  fav_pairing;
  origin;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.fav_pairing = row.fav_pairing;
    this.origin = row.origin;
  }

  static async getFruits() {
    const { rows } = await pool.query('SELECT * FROM fruits');
    return rows.map((row) => new Fruit({ name: row.name }));
  }
}

module.exports = Fruit;
