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
        name: 'Calla lily',
      },
      {
        name: 'Iris',
      },
      {
        name: 'Hydrangea',
      },
    ]);
  });
  it('/flowers/id displays details about flower', async () => {
    const res = await request(app).get('/flowers/3');
    expect(res.status).toEqual(200);

    expect(res.body).toEqual({
      id: '3',
      name: 'Hydrangea',
      origin: 'Japan',
    });
  });
  it('/flowers should create a new flower', async () => {
    const res = await request(app).post('/flowers').send({
      name: 'Gerber Daisy',
      origin: null,
    });
    expect(res.status).toEqual(200);
    expect(res.body.id).not.toBeUndefined();
    expect(res.body.name).toEqual('Gerber Daisy');
  });
  afterAll(() => {
    pool.end();
  });
});
