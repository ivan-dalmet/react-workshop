import axios from 'axios';

axios.interceptors.request.use((config) => ({
  ...config,
  headers: {'x-api-key': process.env.REACT_APP_API_KEY},
}), (error) => Promise.reject(error));

export const reactQueryConfig = () => {
  // Return only the data
  axios.interceptors.response.use((response) => response?.data);
}