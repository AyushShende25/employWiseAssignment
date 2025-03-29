import { api } from '@/api/axiosInstance';

type Credentials = {
  email: string;
  password: string;
};

export const authApi = {
  login: async (credentials: Credentials) => {
    const res = await api.post('/api/login', credentials);
    return res.data;
  },
};
