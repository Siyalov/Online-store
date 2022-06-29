import { React } from "react";

const ItemCard = ({ id, name, description, imageUrl, count, price }) => {
  return (
    <div className="item__card">
      <img className="item__pic" src={imageUrl} />
      <div className="item__info">
        <div>{name}</div>
        <div className="item__description">{description}</div>
        <div>Количество: {count} штук</div>
        <div>{price} ₽</div>
      </div>
      <button className="btn">В корзину</button>
    </div>
  );
};

export default ItemCard;
