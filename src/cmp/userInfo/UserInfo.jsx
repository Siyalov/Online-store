import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { $authHost } from "../../http";

const UserInfo = () => {
    const [payment, setPayment] = useState('');
    let [isEmpty, setIsEmpty] = useState(false);
    const [money, setMoney] = useState(localStorage.getItem('money'));

    const click = async (evt) => {
        evt.preventDefault();
        if (payment) {
            await $authHost.post('user/payment', { money: payment }).then(async () => {
                let res = await $authHost.get('user/profile');
                console.log(res);
                setMoney(res.data.money)
                localStorage.setItem('money', res.data.money)
            })
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
                <p className="h1">Баланс: {money} ₽</p>
                <input value={payment} onChange={e => setPayment(e.target.value)} className={isEmpty ? 'input input__error' : 'input'} placeholder="Сумма, ₽"></input>
                <button onClick={click} className="btn">Пополнить</button>
                <Link to="/login" className="link" onClick={logout}>Выйти</Link>
            </div>
        </div>

    );
};
export default UserInfo;