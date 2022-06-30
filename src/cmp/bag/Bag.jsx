import { React } from "react";
import BagItem from "./BagItem";
import { observer } from "mobx-react-lite";
import { cartStore } from "../../store/cartStore";
import { productsStore } from "../../store/productsStore";

const Bag = observer(() => {
  const addProduct = (id) => {
    const product = productsStore.getProduct(id);

    if (product.count < 1) {
      return;
    }

    productsStore.removeProduct(id);
    cartStore.addProduct(product);
  };

  const removeProduct = (id) => {
    cartStore.removeProduct(id);

    const newProduct = productsStore.getProduct(id);
    const newCount = newProduct.count + 1;

    productsStore.changeProduct(id, { ...newProduct, count: newCount });
  };

  const removeProductGroup = (id) => {
    const countInProductsList = productsStore.getProduct(id).count;
    const countInCart = cartStore.getProduct(id).count;
    const totalCount = countInProductsList + countInCart;

    const newProduct = { ...cartStore.getProduct(id), count: totalCount };

    cartStore.removeProductGroup(id);
    productsStore.changeProduct(id, newProduct);
  };

  return (
    <div className="main__container">
      <div className="main__content">
        <h1 className="h1">Корзина</h1>
        <div className="bag__list">
          {cartStore.getCount() === 0 && "Корзина пуста"}
          {cartStore.products.map((product) => (
            <BagItem
              removeProduct={removeProduct}
              addProduct={addProduct}
              removeProductGroup={removeProductGroup}
              item={product}
              key={product.id}
            />
          ))}
        </div>
        <div className="bag__total__wrapper">
          <div className="h1">{cartStore.getTotalPrice()} ₽</div>
          <button className="btn">Оформить</button>
        </div>
      </div>
    </div>
  );
});
export default Bag;
