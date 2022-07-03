import { React } from "react";
import { ITEM_PIC } from "../consts/consts";

const BagItem = ({ item, removeProduct, addProduct, removeProductGroup }) => {

  return (
    <div className="item__card__bag">
      <img className="item__pic" src={process.env.REACT_APP_API_URL + ITEM_PIC + item.product.id} alt="product"></img>
      <div className="item__info">
        <div className="item__name">{item.product.name}</div>
        <div className="bag__counter">
          <button
            onClick={() => removeProduct(item.product.id)}
            className="button__count"
          >
            -
          </button>
          <div>{item.count} шт.</div>
          <button onClick={() => addProduct(item.product.id)} className="button__count">
            +
          </button>
        </div>
        <h1 className="h1">{item.product.price * item.count} ₽</h1>
      </div>
      <button className="btn" onClick={() => removeProductGroup(item.product.id)}>
        Удалить
      </button>
    </div>
  );
};
export default BagItem;
