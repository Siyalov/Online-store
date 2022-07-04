import { React } from "react";

const Order = (user) => {

    return (
        <div className="list">
            <div className="item__list">
                <div className="name item__text">{user.email || "Всего"}</div>
                <div className="count item__text">{user.count}</div>
                <div className="count item__text">{Number(user.minCheck).toFixed(2)}</div>
                <div className="count item__text">{Number(user.maxCheck).toFixed(2)}</div>
                <div className="count item__text">{Number(user.mediumCheck).toFixed(2)}</div>
                <div className="count item__text">{Number(user.sum).toFixed(2)}</div>
            </div>
        </div>
    );
};
export default Order;