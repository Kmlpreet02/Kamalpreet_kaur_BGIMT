import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API = axios.create({
    baseURL:BASE_URL,
}); 
 API.interceptors.request.use(async(req) => {
    const token = localStorage.getItem("token");
    req.headers.Authorization = `Bearer ${token}`;
    return req;
 });
 API.interceptors.response.use(
    async(res) => {
        return res;
    },
    (error) => {
        if (error.response?.status === 401){
            throw error;
        }
        throw error;
    }
 );
export default API;