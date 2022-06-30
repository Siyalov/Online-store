import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFetch } from "../../hooks/useFetch";
import { URI } from "../../config/config";

const Login = () => {
    const loc = useLocation();
    const isLogin = loc.pathname === "/login"
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirm: ""
    });
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const changeHandler = (nameField) => (e) => {
        setUser({
            ...user,
            [nameField]: e.target.value,
        });
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:9000/user/log-in', { email, password });
            localStorage.setItem('money', response.data.finded_user.money)
            localStorage.setItem('email', response.data.finded_user.email)
            navigate("/user");
        }
        catch (err) {
            setError(error ? error.message : "Неверный логин или пароль");
        }
    }

    const reg = async (email, password) => {
        try {
            await axios.post('http://localhost:9000/user/sign-up', { email, password });
            const response = await axios.post('http://localhost:9000/user/log-in', { email, password });
            localStorage.setItem('money', response.data.finded_user.money)
            localStorage.setItem('email', response.data.finded_user.email)
            navigate("/user");
        }
        catch (err) {
            setError(error ? error.message : "Что-то пошло не так");
        }
    }

    const click = async (evt) => {
        evt.preventDefault();
        if (isLogin) {
            login(user.email, user.password);
        } else {
            user.password === user.confirm ? reg(user.email, user.password) : setError(error ? error.message : "Пароли не совпадают");
        }

    }



    return (
        <div className="form__container">
            <form className="form__small">
                {loc.pathname === '/login' && <h1 className="h1">Авторизация</h1>}
                {loc.pathname === '/register' && <h1 className="h1">Регистрация</h1>}
                <input value={user.email} onChange={changeHandler("email")} className='input' type='email' name='login' placeholder="Логин" required></input>
                <input value={user.password} onChange={changeHandler("password")} className='input' type='password' name='password' placeholder="Пароль" required></input>
                {loc.pathname === '/register' &&
                    <>
                        <input value={user.confirm} onChange={changeHandler("confirm")} className='input' type='password' name='passwordConfirm' placeholder="Подтвердите пароль" required></input>
                        <button type="submit" className="btn" onClick={click}>Создать аккаунт</button>
                        <Link to="/login" className="link">Войти</Link>
                    </>
                }
                {loc.pathname === '/login' &&
                    <>
                        <button type="submit" className="btn" onClick={click}>Войти</button>
                        <Link to="/register" className="link">Создать аккаунт</Link>
                    </>
                }
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default Login;