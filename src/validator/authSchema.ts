import { z } from 'zod';

export const registerSchema = z.object({
  fullname: z.string().min(1, 'Fullname is required '),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string()
    .startsWith('+234', 'Phone number must start with +234')
    .length(14, 'Phone number must be exactly 14 characters long'),
  password: z
    .string()
    .min(6, 'Password must be a minimum of 6 characters')
    .max(30, 'Password must have a maximum of 30 characters'),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});
