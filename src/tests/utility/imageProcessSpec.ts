import path from 'path';
import { process, imageExist } from '../../utility/imageProcess';

describe('process work', () => {
  const imagePath: string = path.resolve('thumbnul/img1-500-500.jpg');

  it('process working correctely', async () => {
    const res = await process('img1', 500, 500);
    expect(res.status).toEqual(true);
    expect(res.content).toEqual(imagePath);
  });

  it('resize function not throwing error', () => {
    expect(async () => {
      await process('img1', 500, 500);
    }).not.toThrow();
  });
});

describe('check if image exist', () => {
  const imagePath: string = path.resolve('thumbnul/img1-500-500.jpg');
  const notExistImage: string = path.resolve('thumbnul/img1-1000-1000.jpg');
  it('return true if no image exist', async () => {
    const res = await imageExist(imagePath);
    expect(res.status).toEqual(true);
    expect(res.content).toEqual(imagePath);
  });
  it('check if  image exist function not throwing error', () => {
    expect(async () => {
      await imageExist(imagePath);
    }).not.toThrow();
  });
  it('return false  if  image exist', async () => {
    const res = await imageExist(notExistImage);
    expect(res.status).toEqual(false);
    expect(res.content).toEqual('image not here');
  });
});
