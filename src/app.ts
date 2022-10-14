import * as express from 'express';
import AppDataSource from './data-source';
import routes from './routes';

const app: express.Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

AppDataSource.initialize()
  .then(() => console.log('Connected to Db'))
  .catch((err) => console.log(err));

export default app;
