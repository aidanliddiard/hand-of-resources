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
    return rows.map((row) => new Flower({ name: row.name }));
  }

  static async getFlowersById(id) {
    const { rows } = await pool.query('SELECT * FROM flowers WHERE id = $1', [
      id,
    ]);
    return rows[0];
  }

  static async insert({ name, origin }) {
    const { rows } = await pool.query(
      'INSERT INTO flowers (name, origin) VALUES ($1, $2) RETURNING *',
      [name, origin]
    );
    return new Flower(rows[0]);
  }

  static async updateById(id, attrs) {
    const flower = await Flower.getFlowersById(id);
    if (!flower) return null;
    const { name, origin } = { ...flower, ...attrs };
    const { rows } = await pool.query(
      `UPDATE flowers 
      SET name =$2, origin= $3 
      WHERE id=$1 RETURNING *`,
      [id, name, origin]
    );
    return new Flower(rows[0]);
  }
}

module.exports = Flower;
