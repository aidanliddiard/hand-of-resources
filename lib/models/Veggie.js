const pool = require('../utils/pool');

class Veggie {
  id;
  name;
  type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
  }

  static async getVeggies() {
    const { rows } = await pool.query('SELECT * FROM veggies');
    return rows.map((row) => new Veggie({ name: row.name }));
  }
}

module.exports = Veggie;
