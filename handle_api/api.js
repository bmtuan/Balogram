import axios from 'axios';

const axiosClient = axios.create({
    // baseURL: 'http://192.168.1.153:8000/api/v1',
    
    baseURL: 'http://192.168.1.29:8000/api/v1',
    // baseURL: 'http://duongcheckerviet.tk:8000/api/v1',
    responseType: 'json',
    timeout: 10 * 1000,
});

const SOCKET_URL = "http://duongcheckerviet.tk:3000/api/v1";
export default axiosClient;