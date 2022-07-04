import { React, useEffect } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { useFetch } from "../../hooks/useFetch";
import { cartStore } from "../../store/cartStore";
import { $authHost } from "../../http";
import { usersStore } from "../../store/userStore";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../consts/consts";

const ItemsList = observer(() => {
  const navigate = useNavigate();
  const { data, error, isLoading, doFetch } = useFetch({
    url: `${process.env.REACT_APP_API_URL}/product/all`,
    method: "get",
  });


  useEffect(() => {
    if (productsStore.products.length < 1) {
      doFetch();
    }
  });

  useEffect(() => {
    if (data) {
      productsStore.setProducts(data);
    }
  }, [data]);

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

  if (isLoading) return <div>... Загрузка</div>;

  return (
    <div className="items__list__container__wrapper">
      <div className="main__container">
        <div className="items__list main__content">
          {productsStore.products.map((product, index) => (
            <ItemCard key={index} {...product} toCardHandler={toCardHandler} />
          ))}
        </div>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
});
export default ItemsList;
