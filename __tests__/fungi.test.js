const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend routes for fungi', () => {
  beforeAll(() => {
    return setup(pool);
  });
  it('/fungi should return a list of fungi', async () => {
    const res = await request(app).get('/fungi');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual([
      { name: 'Morrel' },
      { name: 'Lions Mane' },
      { name: 'Webcaps' },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
