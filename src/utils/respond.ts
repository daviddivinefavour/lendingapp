/* eslint-disable max-len */
// status message data res

import { Response } from 'express';

export const result = (status: number) => (type: boolean) => (message: string) => (data?: object | any) => ({
  status,
  type,
  message,
  data,
});

export const success = (status) => (mes) => (res) => (data?: object | undefined) => res.status(status).send({
  status,
  message: mes,
  data,
});

export const failure = (status: number) => (message: string) => (res: Response) => (data?: object | undefined) => res.status(status).send({
  status,
  message,
  data,
});
