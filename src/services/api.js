import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://10.0.2.2:3333', //Android
  baseURL: 'http://192.168.50.34:3333' //iOS
});

export default api;
