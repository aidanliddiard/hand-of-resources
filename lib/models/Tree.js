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
  static async editTree(id, attrs) {
    const tree = await Tree.getTreeById(id);
    if (!tree) return null;
    const { name, evergreen } = { ...tree, ...attrs };
    const { rows } = await pool.query(
      `
    UPDATE trees
    SET name=$2, evergreen=$3
    WHERE id=$1 RETURNING *
    `,
      [id, name, evergreen]
    );
    return new Tree(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM trees where id=$1 RETURNING *',
      [id]
    );
    return new Tree(rows[0]);
  }
}
module.exports = Tree;
