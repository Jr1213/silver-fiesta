import { NextFunction, Request, Response } from 'express';
import { readFile } from 'fs';
import path from 'path';

const nameMiddelWare = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const imageName: string = req.query.name as unknown as string;
  const height: number = req.query.h as unknown as number;
  const width: number = req.query.w as unknown as number;
  readFile(path.resolve(`full/${imageName}.jpg`), (err, data) => {
    if (!data) {
      res.status(404);
      res.end('image not found');
    }
  });

  if (!width || width <= 0 || isNaN(width)) {
    console.log(isNaN(width));

    res.status(404);
    res.end('width invaild');
    return;
  }
  if (!height || height <= 0 || isNaN(height)) {
    res.status(404);
    res.end('heigth invaild');
    return;
  }

  next();
};

export default nameMiddelWare;
