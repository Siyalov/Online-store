import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserInfo, addMoney } from "../../http/userAPI";
import { LOGIN_ROUTE } from "../consts/consts";

const UserInfo = () => {
    const [payment, setPayment] = useState("");
    let [isEmpty, setIsEmpty] = useState(false);
    let [userInfo, setUserInfo] = useState(false);

    const click = async (evt) => {
        evt.preventDefault();
        if (payment) {
            addMoney(payment).then(data => { setUserInfo(data) });
        } else {
            setIsEmpty(true)
        }

    }
    const logout = () => {
        localStorage.clear();
    }
    useEffect(() => {
        fetchUserInfo().then(data => { setUserInfo(data) });
    }, [])
    return (
        <div className="main__container">
            <div className="main__content user__account">
                <p className="h1">{userInfo.email}</p>
                <p className="h1">Баланс: {userInfo.money} ₽</p>
                <input value={payment} onChange={e => setPayment(e.target.value)} className={isEmpty ? "input input__error" : "input"} placeholder="Сумма, ₽"></input>
                <button onClick={click} className="btn">Пополнить</button>
                <Link to={LOGIN_ROUTE} className="link" onClick={logout}>Выйти</Link>
            </div>
        </div>

    );
};
export default UserInfo;