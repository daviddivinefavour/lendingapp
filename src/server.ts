import { createServer } from 'http';
import app from './app';
import env from './config/globals';

const port = env.PORT;
const server = createServer(app);

server.listen(port, (): void => console.log(`Server is listening on PORT: ${port}`));
