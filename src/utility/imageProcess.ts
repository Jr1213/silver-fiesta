import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import result from '../interfaces/resultInterface';

const process = async (
  name: string,
  height: number,
  width: number
): Promise<result> => {
  // create file name and distaniton
  const outDir = path.resolve(`thumbnul/${name}-${height}-${width}.jpg`);
  //check if file exist

  // create and resize the image
  try {
    const images = fs.readdirSync(path.resolve('thumbnul'));

    //delete if existe
    for (const image of images) {
      if (image.startsWith(name)) {
        fs.unlinkSync(path.resolve(`thumbnul/${image.toString()}`));
      }
    }

    await sharp(path.resolve(`full/${name}.jpg`))
      .resize({ height: height, width: width })
      .toFile(outDir);
    const result: result = {
      status: true,
      content: outDir,
    };

    return result;
  } catch (e) {
    const result: result = {
      status: false,
      content: 'unexpected error happend',
    };

    return result;
  }
};

const imageExist = async (path: string): Promise<result> => {
  let final: result = {
    status: false,
    content: 'image resize',
  };
  try {
    if (fs.existsSync(path)) {
      final = {
        status: true,
        content: path,
      };
    } else {
      final = {
        status: false,
        content: 'image not here',
      };
    }
  } catch (e) {
    final = {
      status: false,
      content: 'unexpeted error ocuure',
    };
  }

  return final;
};

export { process, imageExist };
