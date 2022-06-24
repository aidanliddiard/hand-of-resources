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
  it('/trees/id should return the details of a tree', async () => {
    const res = await request(app).get('/trees/1');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({
      id: '1',
      name: 'Dogwood',
      evergreen: false,
    });
  });
  it('/trees should insert a tree', async () => {
    const res = await request(app)
      .post('/trees')
      .send({ name: 'Spruce', evergreen: true });
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({ id: '4', name: 'Spruce', evergreen: true });
  });
  it('/trees/id should edit a tree', async () => {
    const res = await request(app).put('/trees/1').send({ name: 'Magnolia' });
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({ id: '1', name: 'Magnolia', evergreen: false });
  });
  it('/trees/id should delete tree', async () => {
    const res = await request(app).delete('/trees/3');
    expect(res.status).toEqual(200);

    const { body } = await request(app).get('/trees/3');
    expect(body).toEqual('');
  });
  afterAll(() => {
    pool.end();
  });
});
