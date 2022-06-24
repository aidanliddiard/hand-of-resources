const pool = require('../utils/pool');

class Fungus {
  id;
  name;
  poisonous;

  constructor(rows) {
    this.id = rows.id;
    this.name = rows.name;
    this.poisonous = rows.poisonous;
  }

  static async getFungi() {
    const { rows } = await pool.query('SELECT * FROM fungi');
    return rows.map((row) => new Fungus({ name: row.name }));
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM fungi WHERE id=$1', [id]);
    return rows[0];
  }
  static async addFungus({ name, poisonous }) {
    const { rows } = await pool.query(
      'INSERT INTO fungi (name, poisonous) VALUES ($1, $2) RETURNING *',
      [name, poisonous]
    );
    return new Fungus(rows[0]);
  }
}

module.exports = Fungus;
