import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5438,
  username: 'root',
  password: 'password',
  database: 'lending-app-dev',
  entities: [User],
});

export default AppDataSource;
