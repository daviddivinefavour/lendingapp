import { config } from 'dotenv';

config();

const env: { PORT: number; NODE_ENV: string; API_VERSION: string } = {
  PORT: Number(process.env.PORT),
  NODE_ENV: String(process.env.NODE_ENV),
  API_VERSION: String(process.env.API_VERSION),
};

export default env;
