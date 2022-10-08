import { Application } from 'express';
import authRoutes from './authRoutes';

const apiVersion: string = '/api/v1';
export default (app: Application) => {
  app.use(apiVersion, authRoutes);
};
