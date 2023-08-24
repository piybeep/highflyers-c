import axios from "axios";

export const apiHost = process.env.NEXT_PUBLIC_HOST
const api = axios.create({withCredentials: true, baseURL: apiHost})

export default api
