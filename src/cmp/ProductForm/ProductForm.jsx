import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductForm.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { URI } from "../../config/config";
import { productsStore } from "../../store/productsStore";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    count: "",
  });

  const navigate = useNavigate();

  const changeHandler = (nameField) => (e) => {
    setProduct({
      ...product,
      [nameField]: e.target.value,
    });
  };

  const { data, error, isLoading, doFetch } = useFetch({
    url: `${URI}/add-product`,
    body: product,
    method: "post",
  });

  const getValue = (nameField) => product[nameField];

  const submitHandler = async (e) => {
    e.preventDefault();
    await doFetch();
  };

  useEffect(() => {
    if (data) {
      debugger;
      productsStore.addProduct(data);
      navigate("/");
    }
  }, [data]);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <form className={styles.productForm} onSubmit={submitHandler}>
      <Input
        label="Имя"
        value={getValue("name")}
        changeHandler={changeHandler("name")}
      />
      <Input
        label="Описание"
        value={getValue("description")}
        changeHandler={changeHandler("description")}
      />
      <Input
        label="Картинка"
        value={getValue("imageUrl")}
        changeHandler={changeHandler("imageUrl")}
      />
      <Input
        label="Цена"
        value={getValue("price")}
        changeHandler={changeHandler("price")}
      />
      <Input
        label="Количество"
        value={getValue("count")}
        changeHandler={changeHandler("count")}
      />
      <div className={styles.submitWrapper}>
        <button type="submit">Создать продукт</button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

const Input = ({ label, value, changeHandler }) => (
  <label className={styles.inputWrapper}>
    <span>{label}: </span>
    <input type="text" name={label} value={value} onChange={changeHandler} />
  </label>
);

export default ProductForm;
