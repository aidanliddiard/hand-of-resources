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
  it('/fungi/id should return details about a fungus', async () => {
    const res = await request(app).get('/fungi/1');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({
      id: '1',
      name: 'Morrel',
      poisonous: false,
    });
  });
  it('/fungi should add a new fungus', async () => {
    const res = await request(app)
      .post('/fungi')
      .send({ name: 'Portobello', poisonous: false });
    expect(res.status).toEqual(200);

    expect(res.body.id).not.toBeUndefined();
    expect(res.body.name).toEqual('Portobello');
  });
  afterAll(() => {
    pool.end();
  });
});
