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
  it('/fruits should add a fruit', async () => {
    const res = await request(app).post('/fruits').send({
      name: 'Strawberry',
      fav_pairing: 'Rhubarb',
      origin: 'North America',
    });
    expect(res.status).toEqual(200);
    expect(res.body.id).not.toBeUndefined;
    expect(res.body.name).toEqual('Strawberry');
  });
  it('/fruit/id should update a fruit', async () => {
    const res = await request(app).put('/fruits/3').send({
      name: 'Green Grapes',
    });
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      id: '3',
      name: 'Green Grapes',
      fav_pairing: null,
      origin: 'Asia, Europe, North America',
    });
  });
  afterAll(() => {
    pool.end();
  });
});
