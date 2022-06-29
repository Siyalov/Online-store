import { React } from "react";
import { NavLink, Link } from "react-router-dom";

const UserInfo = () => {
    return (
        <div className="main__container">
            <div className="main__content user__account">
                <p className="h1">xxsdasasdasasx@mail.ru</p>
                <p className="h1">Баланс: 15000 ₽</p>
                <input className="input" placeholder="Сумма, ₽"></input>
                <button className="btn">Пополнить</button>

            </div>
        </div>

    );
};
export default UserInfo;