import { React, useEffect } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { cartStore } from "../../store/cartStore";
import { $authHost } from "../../http";
import { usersStore } from "../../store/userStore";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../consts/consts";
import { fetchProducts } from "../../http/userAPI";

const ItemsList = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    if (productsStore.products.length < 1) {
      fetchProducts().then(data => { productsStore.setProducts(data) });
    }
  }, [])

  const toCardHandler = async (id) => {
    if (usersStore.getRole() !== "user") {
      navigate(LOGIN_ROUTE)
    }
    const currentProduct = productsStore.getProduct(id);
    if (currentProduct.count > 0) {
      productsStore.removeProduct(id);
      cartStore.addProduct({ ...currentProduct });
      await $authHost.post("/cart/add-product", { p_id: id, count: 1 }).then(
        async () => { await $authHost.get("cart"); })
    }
  };

  return (
    <div className="items__list__container__wrapper">
      <div className="main__container">
        <div className="items__list main__content">
          {productsStore.products.map((product, index) => (
            <ItemCard key={index} {...product} toCardHandler={toCardHandler} />
          ))}
        </div>
      </div>
    </div>
  );
});
export default ItemsList;
