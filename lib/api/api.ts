import interceptor from "@/lib/api/interceptor";
import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: process.env.api,
    withCredentials: true,
});

api.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    return response;
}, interceptor);

export default api;
