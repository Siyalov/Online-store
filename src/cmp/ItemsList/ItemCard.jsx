import { React } from "react";

const ItemCard = ({ id, title, description, imageUrl, number, price }) => {
    return (
        <div className="item__card">
            <img className="item__pic" src={imageUrl} alt='product' />
            <div className="item__info">
                <div className="item__text">{title}</div>
                <div className="item__text">{description}</div>
                <div className="item__text">Количество: {number} штук</div>
                <div className="h1">{price} ₽</div>
            </div>
            <button className="btn">В корзину</button>
        </div>
    );
};
export default ItemCard;