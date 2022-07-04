import { React } from "react";
import { ITEM_PIC } from "../consts/consts";

const ItemCard = ({
  id,
  name,
  description,
  count,
  price,
  toCardHandler,
}) => {

  return (
    <div className="item__card">
      <img
        className="item__pic"
        src={process.env.REACT_APP_API_URL + ITEM_PIC + id}
        alt="товар"
      />
      <div className="item__info">
        <div className="item__text">{name}</div>
        <div className="item__description item__text">{description}</div>
        <div className="item__text">Количество: {count} шт.</div>
        <div className="item__text">{price} ₽</div>
      </div>
      <button
        onClick={() => toCardHandler(id)}
        className="btn"
      >
        В корзину
      </button>
    </div>
  );
};

export default ItemCard;
