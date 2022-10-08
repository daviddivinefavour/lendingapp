import * as express from 'express';
import routes from './routes';

const app: express.Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
routes(app);

export default app;
