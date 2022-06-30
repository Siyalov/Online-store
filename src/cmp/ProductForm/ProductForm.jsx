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
        console.log(e.target.files);
        setProduct({
            ...product,
            [nameField]:
                nameField === "imageUrl" ? e.target.files[0] : e.target.value,
        });
    };

    const { data, error, isLoading, doFetch } = useFetch({
        url: `${URI}/product/add`,
        body: appendData(),
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
    });

    const getValue = (nameField) => product[nameField];

    const submitHandler = async (e) => {
        e.preventDefault();
        await doFetch();
        navigate("/");
    };

    useEffect(() => {
        if (data) {
            productsStore.addProduct(data);
            navigate("/");
        }
    }, [data]);

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
                    value={getValue("price")}
                    changeHandler={changeHandler("price")}
                />
                <Input
                    label="Количество"
                    value={getValue("count")}
                    changeHandler={changeHandler("count")}
                />
                <InputImg
                    label="Картинка"
                    changeHandler={changeHandler("imageUrl")}
                />
                <button className="btn" type="submit">Создать продукт</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

const Input = ({ label, value, changeHandler }) => (
    <input
        placeholder={label}
        className="input"
        type="text"
        name={label}
        value={value}
        onChange={changeHandler}
    />
);

const InputImg = ({ value, changeHandler }) => (
    <label htmlFor="inputTag" className="btn">
        Загрузить изображение
        <input id="inputTag" className="loading-image"
            type="file"
            value={value}
            onChange={(event) => {
                this.readFile(event)
            }} />
    </label>
);

export default ProductForm;