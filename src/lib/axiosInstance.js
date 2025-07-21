import axios from 'axios';
import { CONFIG } from './config';
// const api = axios.create({
//   baseURL: CONFIG.API_BASE_URL + '/',
// });
const api = axios.create({
  baseURL: '/api/',
  headers: {
    'ngrok-skip-browser-warning': 'true', // ✅ Thêm header này
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401) {
      try {
        const refreshTokenOld = localStorage.getItem('refreshToken');
        if (!refreshTokenOld) throw new Error('refresh token not available');

        const res = await axios.post(`${CONFIG.API_BASE_URL}/auth/refresh`, {
          refreshToken: refreshTokenOld,
        });

        const { accessToken, refreshToken } = res.data;
        console.log('accsessToken', accessToken);
        console.log('refreshToken', refreshToken);

        localStorage.setItem('accessToken', accessToken);
        localStorage.getItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.getItem('refreshToken', refreshToken);

        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.log('Refresh token expired - redirecting to login');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  },
);

export default api;
