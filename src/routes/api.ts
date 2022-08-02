import { Router, Request, Response } from 'express';
import path from 'path';
import { process, imageExist } from '../utility/imageProcess';

const router = Router();

router.get('/', async (req: Request, res: Response): Promise<void> => {
  const isImageExist = await imageExist(
    path.resolve(`thumbnul/${req.query.name}-${req.query.h}-${req.query.w}.jpg`)
  );

  // image is not exist so create it ans return it
  if (isImageExist.status == false) {
    const response = await process(
      req.query.name as string,
      parseInt(req.query.h as string),
      parseInt(req.query.w as string)
    );
    res.sendFile(response.content);
  } else {
    res.sendFile(
      path.resolve(
        `thumbnul/${req.query.name}-${req.query.h}-${req.query.w}.jpg`
      )
    );
  }
});

export default router;
