import { React } from "react";
import BagItem from "./BagItem";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";

const Bag = observer(() => {
    const removeItem = (item) => {
        productsStore.products = productsStore.products.filter(p => p.id !== item.id)
    }

    return (
        <div className="main__container">
            <div className="main__content">
                <h1 className="h1">Корзина</h1>
                <div className="bag__list">
                    {productsStore.products.length === 0 && "Корзина пуста"}
                    {productsStore.products.map(product =>
                        <BagItem remove={removeItem} item={product} key={product.id} />)}
                </div>
                <div className="bag__total__wrapper">
                    <div className="h1">4000 ₽</div>
                    <button className="btn">Оформить</button>
                </div>
            </div>
        </div>

    );
});
export default Bag;