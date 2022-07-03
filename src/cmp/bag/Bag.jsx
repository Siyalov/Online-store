import { React, useEffect, useState } from "react";
import BagItem from "./BagItem";
import { observer } from "mobx-react-lite";
//import { cartStore } from "../../store/cartStore";
import { productsStore } from "../../store/productsStore";
import { $authHost } from "../../http";
import { fetchCart, fetchUserInfo } from "../../http/userAPI";


const Bag = observer(() => {
  let [bag, setBag] = useState([]);
  let [error, setError] = useState([]);
  //let [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    fetchCart().then(data => { setBag(data); console.log(data); console.log(bag, 'bag') });
  }, [])
  // const addProduct = (id) => {
  //   const product = cartStore.getProduct(id);
  //   cartStore.getTotalPrice()
  //   if (product.count < 1) {
  //     return;
  //   }

  //   productsStore.removeProduct(id);
  //   cartStore.addProduct(product);
  // };
  const addProduct = async (id) => {
    productsStore.removeProduct(id);
    await $authHost.post("/cart/add-product", { p_id: id, count: 1 }).then(
      async () => {
        let res = await $authHost.get("cart");
        console.log(res.data);
      }
    )
  };
  const removeProduct = async (id) => {
    productsStore.addProduct(id);
    await $authHost.post("/cart/add-product", { p_id: id, count: -1 }).then(
      async () => {
        let res = await $authHost.get("cart");
        console.log(res.data);
      }
    )
  };
  const removeProductGroup = async (id) => {
    //const newProduct = productsStore.getProduct(id);
    //const newCount = newProduct.count + 1;
    // productsStore.changeProduct(id, { ...newProduct, count: newCount });
    await $authHost.get("/cart/remove-item?p_id=" + id).then(
      async () => {
        let res = await $authHost.get("cart");
        console.log(res.data);
      }
    )
  };


  const order = async (evt) => {
    evt.preventDefault();
    await $authHost.get("cart/offer").catch(() => setError("Недостаточно средств"))
    fetchCart().then(data => { setBag(data); console.log(data); });
  }

  // const removeProduct = (id) => {
  //   cartStore.removeProduct(id);
  //   cartStore.getTotalPrice()

  //   const newProduct = productsStore.getProduct(id);
  //   const newCount = newProduct.count + 1;

  //   productsStore.changeProduct(id, { ...newProduct, count: newCount });
  // };

  // const removeProductGroup = (id) => {
  //   const countInProductsList = productsStore.getProduct(id).count;
  //   const countInCart = cartStore.getProduct(id).count;
  //   const totalCount = countInProductsList + countInCart;

  //   const newProduct = { ...cartStore.getProduct(id), count: totalCount };

  //   cartStore.removeProductGroup(id);
  //   productsStore.changeProduct(id, newProduct);
  // };
  const getTotalPrice = () => {
    let sum = 0;
    for (let i = 0; i < bag.length; i++) {
      sum += +bag[i].product.price * bag[i].count;
    }
    return sum;
  };


  return (
    <div className="main__container">
      <div className="main__content">
        <h1 className="h1">Корзина{bag.length === 0 && " пуста"}</h1>
        <div className="list">
          {bag.map((p) => (
            <BagItem
              removeProduct={removeProduct}
              addProduct={addProduct}
              removeProductGroup={removeProductGroup}
              item={p}
              key={p.product.id}
            />
          ))}
        </div>
        {bag.length > 0 &&
          <div className="bag__total__wrapper">
            <div className="h1">{getTotalPrice()} ₽</div>
            <button className="btn" onClick={order}>Оформить</button>
          </div>}
        {error && <div className="bag__error error">{error}</div>}
      </div>
    </div>
  );
});
export default Bag;
