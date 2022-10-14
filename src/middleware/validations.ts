import { Request, Response } from 'express';
import { handlerValidationError } from '../utils/errorHandler';
import { failure } from '../utils/respond';
import { registerSchema, loginSchema } from '../validator/authSchema';

export const validateNewUser = async (req: Request, res: Response, next) => {
  const validate = await registerSchema.safeParse(req.body);

  if (!validate.success) {
    const handled = await handlerValidationError(validate);
    return failure(handled.status)(handled.message)(res)(handled.data);
  }
  return next();
};

export const validateLogin = async (req: Request, res: Response, next) => {
  const validate = await loginSchema.safeParse(req.body);
  if (!validate.success) {
    const handled = await handlerValidationError(validate);
    return failure(handled.status)(handled.message)(res)(handled.data);
  }
  return next();
};
