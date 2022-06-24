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
}

module.exports = Fungus;
