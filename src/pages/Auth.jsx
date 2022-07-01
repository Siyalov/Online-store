import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import Login from "../cmp/login/Login"; //удален 

const Auth = () => {
    const loc = useLocation();
    const isLogin = loc.pathname === "/login"
    return (
        <div
            style={{ heiht: window.innerHeight - 54 }}
        >
            <div style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <form className="d-flex flex-column">
                    <input
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <input
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to="/register">Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to="/login">Войдите</NavLink>
                            </div>
                        }
                        <button>
                            {isLogin ? 'Войти' : 'Регистрация'}

                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Auth;