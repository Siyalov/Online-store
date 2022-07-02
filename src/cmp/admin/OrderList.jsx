import { React, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { $authHost } from "../../http";
import Order from "./Order";

const OrderList = () => {
    // const { data, error, isLoading, doFetch } = useFetch({
    //     url: `${process.env.REACT_APP_API_URL}/analitics/users-list`,
    //     method: "get",
    //     headers: { "Authorization": `Bearer ${localStorage.getItem('accessToken')}` }
    // });

    // const fetchUsers = () => {
    //     $authHost.get('/analitics/users-list');
    //     //console.log(r.data);
    // }
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetchUsers().then(data => setUsers(data));
    //     console.log(users);
    // }, [])

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
                </div>
            </div>
        </div>
    );
};
export default OrderList;