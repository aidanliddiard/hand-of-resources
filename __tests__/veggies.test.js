const setup = require('../data/setup');
const request = require('supertest');
const pool = require('../lib/utils/pool');
const app = require('../lib/app');

describe('tests for backend veggies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/veggies displays the veggie list of names', async () => {
    const res = await request(app).get('/veggies');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual([
      { name: 'Cauliflower' },
      { name: 'Bell Pepper' },
      { name: 'Cucumber' },
      { name: 'Arrugalua' },
    ]);
  });
  it('veggies/id returns details about a veggie', async () => {
    const res = await request(app).get('/veggies/3');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({
      id: '3',
      name: 'Cucumber',
      type: 'Marrow',
    });
  });
  it('/veggies should insert a new veggie', async () => {
    const res = await request(app)
      .post('/veggies')
      .send({ name: 'Spinach', type: 'Leafy Green' });
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({ id: '5', name: 'Spinach', type: 'Leafy Green' });
  });
  afterAll(() => {
    pool.end();
  });
});
