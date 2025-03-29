import { api } from '@/api/axiosInstance';
import { Credentials } from '@/types';



export const authApi = {
  login: async (credentials: Credentials) => {
    const res = await api.post('/api/login', credentials);
    return res.data;
  },
};
