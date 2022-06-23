const pool = require('../utils/pool');

class Tree {
  id;
  name;
  evergreen;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.evergreen = row.evergreen;
  }

  static async getTrees() {
    const { rows } = await pool.query('SELECT * FROM trees');
    return rows.map((row) => new Tree({ name: row.name }));
  }
  static async getTreeById(id) {
    const { rows } = await pool.query('SELECT * FROM trees WHERE id=$1', [id]);
    return rows[0];
  }
  static async insertTree({ name, evergreen }) {
    const { rows } = await pool.query(
      'INSERT INTO trees (name, evergreen) VALUES ($1, $2) RETURNING *',
      [name, evergreen]
    );
    return new Tree(rows[0]);
  }
}
module.exports = Tree;
