import { React, useEffect, useState } from "react";
import BagItem from "./BagItem";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { $authHost } from "../../http";
import { fetchCart, refresh } from "../../http/userAPI";
import { cartStore } from "../../store/cartStore";


const Bag = observer(() => {
  let [error, setError] = useState([]);

  useEffect(() => {
    if (cartStore.getCount() < 1) {
      fetchCart().then(data => { cartStore.setProducts(data) });
    }
  }, [])

  const addProduct = async (id) => {
    refresh();
    const product = cartStore.getProduct(id);
    cartStore.getTotalPrice();

    if (product.count < 1) {
      return;
    }

    const prod = productsStore.getProduct(id);
    if (prod.count > 0) {
      productsStore.removeProduct(id);
      cartStore.addProduct(product);
    }

    await $authHost.post("/cart/add-product", { p_id: id, count: 1 }).then(
      async () => { await $authHost.get("cart"); }
    )
  };

  const removeProduct = async (id) => {
    refresh();

    await $authHost.post("/cart/add-product", { p_id: id, count: -1 }).then(
      async () => { await $authHost.get("cart"); }
    )

    cartStore.removeProduct(id);
    cartStore.getTotalPrice();
    const newProduct = productsStore.getProduct(id);
    const newCount = newProduct.count + 1;
    productsStore.changeProduct(id, { ...newProduct, count: newCount });
  };

  const removeProductGroup = async (id) => {
    refresh();

    const countInProductsList = productsStore.getProduct(id).count;
    const countInCart = cartStore.getProduct(id).count;
    const totalCount = countInProductsList + countInCart;
    const newProduct = { ...cartStore.getProduct(id), count: totalCount };
    cartStore.removeProductGroup(id);
    productsStore.changeProduct(id, newProduct);

    await $authHost.get("/cart/remove-item?p_id=" + id).then(
      async () => { await $authHost.get("cart"); }
    )
  };


  const order = async (evt) => {
    evt.preventDefault();
    refresh();
    await $authHost.get("cart/offer").catch(() => setError("Недостаточно средств"))
    fetchCart().then(data => { cartStore.setProducts(data) });
  }

  return (
    <div className="main__container">
      <div className="main__content">
        <h1 className="h1">Корзина{cartStore.getCount() === 0 && " пуста"}</h1>
        <div className="list">
          {cartStore.products.map((p) => (
            <BagItem
              removeProduct={removeProduct}
              addProduct={addProduct}
              removeProductGroup={removeProductGroup}
              item={p}
              key={p.id}
            />
          ))}
        </div>
        {cartStore.getCount() > 0 &&
          <div className="bag__total__wrapper">
            <div className="h1">{cartStore.getTotalPrice()} ₽</div>
            <button className="btn" onClick={order}>Оформить</button>
          </div>}
        {error && <div className="bag__error error">{error}</div>}
      </div>
    </div>
  );
});
export default Bag;
