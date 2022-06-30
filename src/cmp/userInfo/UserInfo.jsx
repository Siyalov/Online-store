import axios from "axios";
import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const UserInfo = () => {
    const [money, setMoney] = useState('');
    let [isEmpty, setIsEmpty] = useState(false);
    const click = async (evt) => {
        evt.preventDefault();
        if (money) {
            // const response = await axios.post('http://localhost:9000/user/payment', { price: money });
        } else {
            setIsEmpty(true)
        }

    }
    const logout = () => {
        localStorage.clear();
    }

    return (
        <div className="main__container">
            <div className="main__content user__account">
                <p className="h1">{localStorage.getItem('email')}</p>
                <p className="h1">Баланс: {localStorage.getItem('money')} ₽</p>
                <input value={money} onChange={e => setMoney(e.target.value)} className={isEmpty ? 'input input__error' : 'input'} placeholder="Сумма, ₽"></input>
                <button onClick={click} className="btn">Пополнить</button>
                <Link to="/login" className="link" onClick={logout}>Выйти</Link>
            </div>
        </div>

    );
};
export default UserInfo;