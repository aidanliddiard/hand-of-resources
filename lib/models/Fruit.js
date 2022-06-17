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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM fruit WHERE id = $1', [
      id,
    ]);
    return rows[0];
  }
  static async insert({ name, fav_pairing, origin }) {
    const { rows } = await pool.query(
      'INSERT INTO fruits (name, fav_pairing, origin) VALUES ($1, $2, $3) RETURNING *',
      [name, fav_pairing, origin]
    );
    return new Fruit(rows[0]);
  }
}

module.exports = Fruit;
