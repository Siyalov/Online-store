import { React } from "react";

const Order = (userData) => {

    return (
        <div className="item__card__bag">
            <div className="item__info">
                <div className="item__name">{userData.email}</div>
                <div className="count">{userData.orderCount}</div>
                <div className="date">{userData.lastDate}</div>
                <div className="money">{(userData.total / userData.orderCount).toFixed(2)}  ₽</div>
                <div className="money">{userData.total}  ₽</div>

            </div>
        </div>
    );
};
export default Order;