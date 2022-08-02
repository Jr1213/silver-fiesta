import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('name middelware', () => {
  it('move to function if all param exist', async () => {
    const response = await request.get('/api?name=img1&w=200&h=200');

    expect(response.status).toBe(200);
  });

  it('return not found if name paramter was not send', async () => {
    const response = await request.get('/api?w=500');

    expect(response.status).toBe(404);
  });
});
