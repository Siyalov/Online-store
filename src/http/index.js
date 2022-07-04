import axios from "axios";

const $authHost = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $authHost }