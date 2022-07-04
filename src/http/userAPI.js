import { $authHost } from "./index";

export const registration = async (email, password) => {
    let res = await $authHost.post("user/sign-up", { email, password }, { credentials: "include" });
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
}

export const login = async (email, password) => {
    let res = await $authHost.post("user/log-in", { email, password }, { credentials: "include" });
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    localStorage.setItem("is_admin", res.data.userDto.is_admin);
}

export const fetchUsers = async () => {
    const { data } = await $authHost.get("/analitics/users-list");
    return data;
}

export const fetchStat = async (id) => {
    const { data } = await $authHost.get("analitics/purchases");
    return data;
}


export const fetchUserInfo = async () => {
    const { data } = await $authHost.get("user/profile");
    return data;
}

export const addMoney = async (payment) => {
    const { data } = await $authHost.post("user/payment", { money: payment });
    return data;
}

export const fetchCart = async () => {
    const { data } = await $authHost.get("/cart");
    return data;
}

export const fetchProducts = async () => {
    const { data } = await $authHost.get("/product/all");
    return data;
}

export const refresh = async () => {
    let res = await $authHost.get("token/refresh");
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
}