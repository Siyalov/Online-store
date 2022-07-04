import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { $authHost } from "../../http";
import { fetchCart, login, registration } from "../../http/userAPI";
import { cartStore } from "../../store/cartStore";
import { usersStore } from "../../store/userStore";
import { LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE } from "../consts/consts";

const Login = () => {
    const loc = useLocation();
    const isLogin = loc.pathname === LOGIN_ROUTE
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState("");
    const [emptyLog, setEmptyLog] = useState(false)
    const [emptyPass, setEmptyPass] = useState(false)

    const click = async (evt) => {
        evt.preventDefault();
        if (email.length < 1) setEmptyLog(true)
        if (password.length < 1) setEmptyPass(true)
        else {
            if (isLogin) {
                login(email, password).catch(() => setError("Неверный логин или пароль")).then(async () => {
                    let res = await $authHost.get("user/profile")
                    localStorage.setItem("email", res.data.email)
                    localStorage.setItem("money", res.data.money)
                    usersStore.setRole()
                    fetchCart().then(data => { cartStore.setProducts(data) })
                    navigate(SHOP_ROUTE)
                })
            } else {
                if (confirm !== password) {
                    setError("Пароли не совпадают");
                    return;
                }
                registration(email, password).then(setError("Регистрация прошла успешно"))
                usersStore.setRole()
            }
        }

    }

    const changeLink = () => setError(null)

    return (
        <div className="form__container">
            <form className="form__small">
                <h1 className="h1">{isLogin ? "Авторизация" : "Регистрация"}</h1>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={emptyLog ? "input input__error" : "input"}
                    type="email"
                    name="login"
                    placeholder="Логин"
                    required
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={emptyPass ? "input input__error" : "input"}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required
                />
                {!isLogin &&
                    <input
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                        className="input"
                        type="password"
                        name="passwordConfirm"
                        placeholder="Подтвердите пароль"
                        required
                    />
                }
                <button
                    type="submit"
                    className="btn"
                    onClick={click}
                >
                    {isLogin ? "Войти" : "Создать аккаунт"}
                </button>
                <Link
                    to={isLogin ? REG_ROUTE : LOGIN_ROUTE}
                    onClick={changeLink}
                    className="link"
                >
                    {isLogin ? "Создать аккаунт" : "Войти"}
                </Link>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default Login;