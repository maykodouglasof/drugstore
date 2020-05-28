import axios from 'axios';

const api = axios.create({
  baseURL: "http://g300603ws004:3333"
});

export default api;