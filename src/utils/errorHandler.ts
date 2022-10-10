import { result } from './respond';

export const handlerValidationError = async (err) => {
  const errors: string[] = [];
  err.error.issues.forEach((element) => {
    errors.push(element.message);
  });
  return result(422)(false)('Validation Error')(errors);
};
