import axios from 'axios';

const API = axios.create({
  baseURL: 'http://<ip-config>:<port>/api/v1/user',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;

