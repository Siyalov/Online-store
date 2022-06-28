import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import pic from "../../img/peppa.jpg"

const ItemCard = () => {
    return (
        <div className="item__card">
            <img className="item__pic" src={pic}></img>
            <div className="item__info">
                <div className="item__name">Свинка</div>
                <h1>1000 ₽</h1>
            </div>
            <button className="btn">В корзину</button>
        </div>
    );
};
export default ItemCard;