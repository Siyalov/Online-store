import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserInfo, addMoney } from "../../http/userAPI";
import { LOGIN_ROUTE } from "../consts/consts";

const UserInfo = () => {
    const [payment, setPayment] = useState("");
    let [isEmpty, setIsEmpty] = useState(false);
    let [userInfo, setUserInfo] = useState(false);
    const [error, setError] = useState("");

    const click = async (evt) => {
        evt.preventDefault();
        if (payment > 0 && payment.indexOf("-") === -1 && payment < Number.MAX_SAFE_INTEGER) {
            addMoney(payment).then(data => { setUserInfo(data) });
            setError(false)
        } else {
            if (payment.length === 0) setIsEmpty(true);
            else setError("Введите корректную сумму")
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
                <input type="number" min="0" value={payment} onChange={e => setPayment(e.target.value)} className={isEmpty ? "input input__error" : "input"} placeholder="Сумма, ₽"></input>
                {error && <div>{error}</div>}
                <button onClick={click} className="btn">Пополнить</button>
                <Link to={LOGIN_ROUTE} className="link" onClick={logout}>Выйти</Link>
            </div>
        </div>

    );
};
export default UserInfo;