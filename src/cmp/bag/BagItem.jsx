import { React, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const BagItem = ({ item, remove }) => {
    const [itemCount, setItemCount] = useState(1);

    function incrItemCount() {
        setItemCount(itemCount + 1)
    }

    function decrItemCount() {
        if (itemCount > 1) setItemCount(itemCount - 1)
    }

    return (
        <div className="item__card__bag">
            <img className="item__pic" src={item.imageUrl} alt="Свинка"></img>
            <div className="item__info">
                <div className="item__name">{item.title}</div>
                <div className="bag__counter">
                    <button onClick={decrItemCount} className="button__count">-</button>
                    <div>{itemCount} шт.</div>
                    <button onClick={incrItemCount} className="button__count">+</button>
                </div>
                <h1 className="h1">{item.price * itemCount} ₽</h1>
            </div>
            <button className="btn" onClick={remove}>Удалить</button>
        </div>
    );
};
export default BagItem;