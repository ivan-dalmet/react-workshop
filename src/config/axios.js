import axios from 'axios';

axios.interceptors.request.use((config) => ({
  ...config,
  headers: {'x-api-key': process.env.API_KEY},
}), (error) => Promise.reject(error));