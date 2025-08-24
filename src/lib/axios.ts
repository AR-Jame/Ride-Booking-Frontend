import { config } from "@/config"
import axios from "axios"
export const axiosInstance = axios.create({
    baseURL: config.BASE_URL,
    withCredentials: true
})