import axios from 'axios';

const api = axios.create({
  baseURL: '/'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token){
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async err => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry){
      originalRequest._retry = true;

      try{
        const refresh_token = localStorage.getItem('refresh_token');
        if (!refresh_token) throw new Error("refresh token not available");

        const res = await axios.post('/api/token', {
          refresh_token: refresh_token
        });
        const { access_token } = res.data;

        localStorage.setItem('access_token', access_token);

        originalRequest.headers['Authorization'] = `Bearer ${access_token}`;
        return api(originalRequest);

      } catch(refreshError){

        console.log("Refresh token expired - redirecting to login");
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';

        return Promise.reject(refreshError);
      }
    }
    return Promise.resolve(err);
  }
);

export default api;
