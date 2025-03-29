import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export const updateFormSchema = z.object({
  email: z.string().email('Invalid email'),
  first_name: z.string().min(4, 'first name should be at least 4 chars long'),
  last_name: z.string().min(4, 'last name should be at least 4 chars long'),
});
