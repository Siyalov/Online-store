import { React, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { URI } from "../../config/config";
import { useFetch } from "../../hooks/useFetch";
import { cartStore } from "../../store/cartStore";

const ItemsList = observer(() => {
  const { data, error, isLoading, doFetch } = useFetch({
    url: `${URI}/product/s`,
    method: "get",
  });

  useEffect(() => {
    if (productsStore.products.length < 1) {
      doFetch();
    }
  }, []);

  useEffect(() => {
    if (data) {
      productsStore.setProducts(data.products);
    }
  }, [data]);

  const toCardHandler = (id) => {
    const currentProduct = productsStore.getProduct(id);
    productsStore.removeProduct(id);
    cartStore.addProduct({ ...currentProduct });
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
      {error & <div>{error}</div>}
    </div>
  );
});
export default ItemsList;
