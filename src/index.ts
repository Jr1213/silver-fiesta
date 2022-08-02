import express from 'express';
import nameMiddelWare from './middelware/nameMiddelware';
import router from './routes/api';

const app = express();
const port = 3001;

app.use(nameMiddelWare);

app.use('/api', router);

app.listen(port, () => {
  console.log(`server is runing on http://127.0.0.1:${port}`);
});

export default app;
