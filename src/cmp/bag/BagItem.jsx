import { React } from "react";
import { ITEM_PIC } from "../consts/consts";

const BagItem = ({ item, removeProduct, addProduct, removeProductGroup }) => {

  return (
    <>
      {item.count > 0 &&
        <div className="item__card__bag">
          <img
            className="item__pic"
            src={process.env.REACT_APP_API_URL + ITEM_PIC + item.id}
            alt="product"
          ></img>
          <div className="item__info">
            <div className="item__name">{item.name}</div>
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
      }
    </>
  );
};
export default BagItem;
