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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM veggies WHERE id=$1', [
      id,
    ]);
    return rows[0];
  }
  static async addVeggie({ name, type }) {
    const { rows } = await pool.query(
      'INSERT INTO veggies (name, type) VALUES ($1, $2) RETURNING *',
      [name, type]
    );
    return new Veggie(rows[0]);
  }
  static async updateVeggieById(id, attrs) {
    const veggie = await Veggie.getById(id);
    if (!veggie) return null;
    const { name, type } = { ...veggie, ...attrs };
    const { rows } = await pool.query(
      `UPDATE veggies SET name=$2, type=$3 
      WHERE id=$1 RETURNING *`,
      [id, name, type]
    );
    return new Veggie(rows[0]);
  }
}

module.exports = Veggie;
