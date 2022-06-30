import { React } from "react";
import { URI } from "../../config/config";

const ItemCard = ({ id, name, description, imageUrl, count, price }) => {

    return (
        <div className="item__card">
            <img className="item__pic" src={URI + '/product/media/?p_id=' + id} alt='товар' />
            <div className="item__info">
                <div className="item__text">{name}</div>
                <div className="item__description item__text">{description}</div>
                <div className="item__text">Количество: {count} шт.</div>
                <div className="item__text">{price} ₽</div>
            </div>
            <button className="btn">В корзину</button>
        </div>
    );
};

export default ItemCard;
