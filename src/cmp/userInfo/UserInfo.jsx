import axios from "axios";
import { React, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { $authHost } from "../../http";

const UserInfo = () => {
    const [money, setMoney] = useState('');
    let [isEmpty, setIsEmpty] = useState(false);
    let user = getUser();

    async function getUser() {
        let res = await $authHost.get('user/profile');
        return res.data;
    }
    console.log(user);
    const click = async (evt) => {
        evt.preventDefault();
        if (money) {
            await axios.post(`${process.env.REACT_APP_API_URL}/user/payment`, { price: money, "Authorization": `Bearer ${localStorage.getItem('accessToken')}` });
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
                <p className="h1">{user.email}</p>
                <p className="h1">Баланс: {localStorage.getItem('money')} ₽</p>
                <input value={money} onChange={e => setMoney(e.target.value)} className={isEmpty ? 'input input__error' : 'input'} placeholder="Сумма, ₽"></input>
                <button onClick={click} className="btn">Пополнить</button>
                <Link to="/login" className="link" onClick={logout}>Выйти</Link>
            </div>
        </div>

    );
};
export default UserInfo;