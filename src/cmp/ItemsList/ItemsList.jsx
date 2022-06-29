import { React } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";

const ItemsList = observer(() => {
    return (
        <div className="main__container">
            <div className="items__list main__content">
                {productsStore.products.map((product, index) => (
                    <ItemCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
});
export default ItemsList;