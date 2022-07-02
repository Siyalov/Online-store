import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { $authHost } from "../../http";
import { login, registration } from "../../http/userAPI";

const Login = () => {
    const loc = useLocation();
    const isLogin = loc.pathname === "/login"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const navigate = useNavigate();
    const [error, setError] = useState("");


    const click = async (evt) => {
        evt.preventDefault();
        try {
            let data;
            if (isLogin) {
                login(email, password).then(async () => {
                    let res = await $authHost.get('user/profile');
                    console.log(res.data)
                    localStorage.setItem('email', res.data.email)
                    localStorage.setItem('money', res.data.money)
                    navigate('/')
                })
            } else {
                registration(email, password)
            }
        }
        catch (e) {
            alert(e.message)
        }
    }

    return (
        <div className="form__container">
            <form className="form__small">
                <h1 className="h1">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='input'
                    type='email'
                    name='login'
                    placeholder="Логин"
                    required>
                </input>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='input'
                    type='password'
                    name='password'
                    placeholder="Пароль"
                    required>
                </input>
                {loc.pathname === '/register' &&
                    <>
                        <input value={confirm} onChange={e => setConfirm(e.target.value)} className='input' type='password' name='passwordConfirm' placeholder="Подтвердите пароль" required></input>
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