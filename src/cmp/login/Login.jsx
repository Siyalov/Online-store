import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";


const Login = () => {
    const loc = useLocation();
    console.log(loc);
    return (
        <div className="form__container">
            <form className="form__auth">
                <h1 className="h1">Авторизация</h1>
                <input className="input" type='email' name='login' placeholder="Логин" required></input>
                <input className="input" type='password' name='password' placeholder="Пароль" required></input>
                {loc.pathname === '/register' &&
                    <input className="input" type='password' name='password' placeholder="Подтвердите пароль" required></input>
                }
                <button className="btn">Войти</button>
                {loc.pathname === '/login' &&
                    <Link to="/register" className="link">Создать аккаунт</Link>
                }
            </form>
        </div>
    )
}

export default Login;