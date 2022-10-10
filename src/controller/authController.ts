import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  console.log('Controller');
};

export const login = async (req: Request, res: Response) => {
  console.log('Login');
};
