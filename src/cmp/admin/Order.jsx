import { React } from "react";

const Order = (user) => {

    return (
        <div className="list">
            <div className="item__list">
                <div className="name">{user.email}</div>
                <div className="count">{user.count}</div>
                <div className="count">{Number(user.minCheck).toFixed(2)}</div>
                <div className="count">{Number(user.maxCheck).toFixed(2)}</div>
                <div className="count">{Number(user.mediumCheck).toFixed(2)}</div>
                <div className="count">{Number(user.sum).toFixed(2)}</div>
            </div>
        </div>
    );
};
export default Order;