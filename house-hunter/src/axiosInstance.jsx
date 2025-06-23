import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://your-backend-url.com/api', // Replace with your backend URL
  timeout: 1000,
});
export default axiosInstance; 
