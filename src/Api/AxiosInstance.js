
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://192.168.29.80:8000/api', 
  headers: {
    'Content-Type': 'application/json'
  }
});

export default AxiosInstance;
