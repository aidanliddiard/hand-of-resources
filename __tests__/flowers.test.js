const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/flowers should display a list of flowers', async () => {
    const res = await request(app).get('/flowers');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Calla lily',
        origin: 'South Africa',
      },
      {
        id: '2',
        name: 'Iris',
        origin: 'Virginia',
      },
      {
        id: '3',
        name: 'Hydrangea',
        origin: 'Japan',
      },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
