import { React, useEffect, useState } from "react";
import Order from "./Order";
import { fetchStat, fetchUsers } from "../../http/userAPI";

const OrderList = () => {
    const [empty, setEmpty] = useState(false)
    const [users, setUsers] = useState([])
    const [stat, setStat] = useState([])

    useEffect(() => {
        fetchUsers().then(data => { setUsers(data) })
    }, [])

    useEffect(() => {
        fetchStat().catch(e => setEmpty(true)).then(data => { setStat(data) })
    }, [])

    return (
        <div className="main__container form__container">
            <div className="main__content">
                <h1 className="h1">Аналитика</h1>
                {!empty ?
                    <div className="list">
                        <div className="item__list">
                            <div className="name"></div>
                            <div className="count">Число заказов</div>
                            <div className="count">Мин. чек, ₽</div>
                            <div className="count">Макс. чек, ₽</div>
                            <div className="count">Средний чек, ₽</div>
                            <div className="count">Всего, ₽</div>
                        </div>
                        <Order {...stat} />
                        {users.map((user, index) => (
                            <Order key={index} {...user} />
                        ))}
                    </div>
                    : "Нет покупок"
                }
            </div>
        </div>
    );
};
export default OrderList;