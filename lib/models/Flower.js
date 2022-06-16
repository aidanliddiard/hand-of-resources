const pool = require('../utils/pool');

class Flower {
  id;
  name;
  origin;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.origin = row.origin;
  }

  static async getFlowers() {
    const { rows } = await pool.query('SELECT * FROM flowers');
    return rows.map((row) => new Flower(row));
  }
}

module.exports = Flower;
