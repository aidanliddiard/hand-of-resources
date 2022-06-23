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
    const { rows } = await pool.query('SELECT * from TREES');
    return rows.map((row) => new Tree({ name: row.name }));
  }
}
module.exports = Tree;
