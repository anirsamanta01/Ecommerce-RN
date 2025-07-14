import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.31.188:8000/api/v1/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

