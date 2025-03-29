import { z } from 'zod';

import { loginFormSchema, updateFormSchema } from '@/schema';

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type UpdateUserInput = z.infer<typeof updateFormSchema>;

export type LoginUserInput = z.infer<typeof loginFormSchema>;
