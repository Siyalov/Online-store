import { React } from "react";

const ItemCard = ({ id, title, description, imageUrl, number, price }) => {
  return (
    <div className="item__card">
      <img className="item__pic" src={imageUrl} />
      <div className="item__info">
        <div>{title}</div>
        <div className="item__description">{description}</div>
        <div>Количество: {number} штук</div>
        <div>{price} ₽</div>
      </div>
      <button className="btn">В корзину</button>
    </div>
  );
};
export default ItemCard;
