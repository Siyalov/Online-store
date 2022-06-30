import { React } from "react";

const BagItem = ({ item, removeProduct, addProduct, removeProductGroup }) => {
  return (
    <div className="item__card__bag">
      <img className="item__pic" src={item.imageUrl} alt="Свинка"></img>
      <div className="item__info">
        <div className="item__name">{item.title}</div>
        <div className="bag__counter">
          <button
            onClick={() => removeProduct(item.id)}
            className="button__count"
          >
            -
          </button>
          <div>{item.count} шт.</div>
          <button onClick={() => addProduct(item.id)} className="button__count">
            +
          </button>
        </div>
        <h1 className="h1">{item.price * item.count} ₽</h1>
      </div>
      <button className="btn" onClick={() => removeProductGroup(item.id)}>
        Удалить
      </button>
    </div>
  );
};
export default BagItem;
