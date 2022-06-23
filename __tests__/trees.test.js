const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend tree routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/trees should return a list of tree names', async () => {
    const res = await request(app).get('/trees');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual([
      { name: 'Dogwood' },
      { name: 'Redwood' },
      { name: 'Birch' },
    ]);
  });
  afterEach(() => {
    pool.end();
  });
});
