import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { productsStore } from "../../store/productsStore";

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        imageUrl: "",
        price: "",
        count: "",
    });

    const appendData = () => {
        const data = new FormData();
        data.append("name", product.name);
        data.append("description", product.description);
        data.append("image", product.imageUrl);
        data.append("price", product.price);
        data.append("count", product.count);
        return data
    };

    const navigate = useNavigate();

    const changeHandler = (nameField) => (e) => {
        setProduct({
            ...product,
            [nameField]:
                nameField === "imageUrl" ? e.target.files[0] : e.target.value,
        });
    };

    const { data, error, isLoading, doFetch } = useFetch({
        url: `${process.env.REACT_APP_API_URL}/product/add`,
        body: appendData(),
        method: "post",
        headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${localStorage.getItem("accessToken")}` }
    });

    const getValue = (nameField) => product[nameField];

    const submitHandler = async (e) => {
        e.preventDefault();
        if (getValue("price") < Number.MAX_SAFE_INTEGER && getValue("count") < Number.MAX_SAFE_INTEGER) {
            await doFetch()
        }
    };

    useEffect(() => {
        if (data) {
            productsStore.setProducts([]);
            navigate("/")
        }
    });

    if (isLoading) {
        return <div>...Loading</div>;
    }

    return (
        <div className="form__container">
            <form className="form__small" onSubmit={submitHandler}>
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
                    label="Цена"
                    type="number"
                    min="0"
                    value={getValue("price")}
                    changeHandler={changeHandler("price")}
                />
                <Input
                    label="Количество"
                    type="number"
                    min="0"
                    value={getValue("count")}
                    changeHandler={changeHandler("count")}
                />
                <Input
                    label="Изображение"
                    type="file"
                    changeHandler={changeHandler("imageUrl")}
                />
                <button className="btn" type="submit">Создать продукт</button>
                {error && <div>Заполните все поля</div>}
            </form>
        </div>
    );
};

const Input = ({ label, value, changeHandler, type }) => (
    <input
        className="input"
        placeholder={label}
        type={`${type || "text"}`}
        name={label}
        value={value}
        onChange={changeHandler}
    />
);

export default ProductForm;