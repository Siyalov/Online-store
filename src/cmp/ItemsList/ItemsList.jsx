import { React, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { useFetch } from "../../hooks/useFetch";
import { cartStore } from "../../store/cartStore";
import axios from "axios";

const ItemsList = observer(() => {
  const { data, error, isLoading, doFetch } = useFetch({
    url: `${process.env.REACT_APP_API_URL}/product/all`,
    method: "get",
  });

  useEffect(() => {
    if (productsStore.products.length < 1) {
      doFetch();
    }
  }, []);

  useEffect(() => {
    if (data) {
      productsStore.setProducts(data);
    }
  }, [data]);

  const toCardHandler = async (id) => {
    const currentProduct = productsStore.getProduct(id);
    productsStore.removeProduct(id);
    cartStore.addProduct({ ...currentProduct });
    await axios.post(`${process.env.REACT_APP_API_URL}/cart/add-product`, { p_id: id, count: 1 }, { credentials: 'include' });
  };

  if (isLoading) return <div>... Loading</div>;

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
