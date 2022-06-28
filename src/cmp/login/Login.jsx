import React from "react";
import { Link, useParams } from "react-router-dom";


const Login = () => {
    return (
        <div className="form__container">
            <form className="form__auth">
                <h1>Авторизация</h1>
                <input className="input" type='email' name='login' placeholder="Логин"></input>
                <input className="input" type='password' name='password' placeholder="Пароль"></input>
                <button className="btn">Войти</button>
                <Link to="/register" className="link" href="#">Создать аккаунт</Link>
            </form>
        </div>
    )
}

export default Login;