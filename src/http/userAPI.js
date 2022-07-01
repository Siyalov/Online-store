import { $authHost } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    let res = await $authHost.post('user/sign-up', { email, password }, { credentials: 'include' })
    localStorage.setItem('accessToken', res.data.accessToken)
    localStorage.setItem('refreshToken', res.data.refreshToken)
}

export const login = async (email, password) => {
    let res = await $authHost.post('user/log-in', { email, password }, { credentials: 'include' })
    localStorage.setItem('accessToken', res.data.accessToken)
    localStorage.setItem('refreshToken', res.data.refreshToken)
}

