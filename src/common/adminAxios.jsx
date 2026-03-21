import axios from "axios";
import { adminToken } from "./config";

const normalizedBaseUrl = (import.meta.env.VITE_BASE_URL || "").replace(/\/+$/, "");

const instance = axios.create({
    baseURL: normalizedBaseUrl
})

// Add Bearer Token
instance.interceptors.request.use((config) => {
    const token = adminToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})


// Modify response to return data directly
instance.interceptors.response.use((response) => {
    return response.data;
}, (error) =>{
    if(error?.response?.status === 401){
        localStorage.removeItem("shopifynest-admin-info");
        window.location.href = "/admin/login";
    }
    return Promise.reject(error);
})


export default instance;