import interceptor from "@/lib/api/interceptor";
import axios, { AxiosResponse } from "axios";

const authApi = axios.create({
    baseURL: process.env.authApi,
    withCredentials: true,
});

authApi.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    return response;
}, interceptor);

export default authApi;
