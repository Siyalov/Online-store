import { React, useEffect, useState } from "react";
import { $authHost } from "../../http";
import Order from "./Order";
import { fetchUsers } from "../../http/userAPI";

const OrderList = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers().then(data => { setUsers(data) });
    }, [])


    function total(arr) {
        let sum, count, date;
        sum = 0;
        count = 0;
        date = "";
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i].total;
            count += +arr[i].orderCount;
            date = (date > arr[i].lastDate ? date : arr[i].lastDate)
        }
        return {
            email: "Всего",
            total: sum.toFixed(2).toString(),
            orderCount: count.toString(),
            lastDate: date
        }
    }

    return (
        <div className="main__container form__container">
            <div className="main__content">
                <h1 className="h1">Аналитика</h1>
                <div className="bag__list">
                    <div className="item__card__bag">
                        <div className="item__info">
                            <div className="item__name"></div>
                            <div className="count">Число заказов</div>
                            <div className="date">Последний</div>
                            <div className="money">Средний чек, ₽</div>
                            <div className="money">Всего, ₽</div>

                        </div>
                    </div>
                    <Order {...total(users)} />
                    {users.map((user, index) => (
                        <Order key={index} {...user} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default OrderList;