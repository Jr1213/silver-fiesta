import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test images endpoint', () => {
  it('request sucess', async () => {
    const response = await request.get('/api?name=img1&w=100&h=200');

    expect(response.type).toEqual('image/jpeg');
    expect(response.statusCode).toEqual(200);
  });
});

describe('end point failuer', () => {
  it('can not open end point without name', async () => {
    const response = await request.get('/api');

    expect(response.statusCode).toEqual(404);
  });
});
