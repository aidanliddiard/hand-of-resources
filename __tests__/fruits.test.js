const setup = require('../data/setup');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('backend fruit routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/fruit should display a list of fruit', async () => {
    const res = await request(app).get('/fruits');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      { name: 'Raspberry' },
      { name: 'Apple' },
      { name: 'Grapes' },
    ]);
  });
  it('/fruits/id should display the details about a fruit', async () => {
    const res = await request(app).get('/fruits/2');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: '2',
      name: 'Apple',
      fav_pairing: 'Cheese',
      origin: 'Kazakhstan',
    });
  });
  afterAll(() => {
    pool.end();
  });
});
