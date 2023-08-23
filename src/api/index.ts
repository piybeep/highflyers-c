import axios from "axios";

export const apiHost = process.env.NEXT_PUBLIC_HOST
const api = axios.create({withCredentials: true, baseURL: apiHost})

// api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
//     return config
// })

// api.interceptors.response.use((config) => {
//     return config
// }, async (error) => {
//     const originalRequest = error.config
//     if ((error?.response?.status === 401 || error?.response?.status === 403) && error?.config && !error?.config?._isRetry) {
//         originalRequest._isRetry = true
//         try {
//             const response = await axios.get(`${apiHost}/auth/refresh`, { withCredentials: true, headers: { ...error.config.headers, Authorization: `Bearer ${localStorage.getItem('refreshToken')}` } })
//             localStorage.setItem('accessToken', response.data.accessToken)
//             localStorage.setItem('refreshToken', response.data.refreshToken)
//             return api.request(originalRequest)
//         } catch (error) {
//             throw error
//         }
//     }
// })

export default api
