import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'divinefavour',
  password: 'password',
  database: 'test',
  entities: [User],
});

export default AppDataSource;
