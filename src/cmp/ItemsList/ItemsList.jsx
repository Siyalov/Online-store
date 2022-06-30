import { React, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { observer } from "mobx-react-lite";
import { productsStore } from "../../store/productsStore";
import { URI } from "../../config/config";
import axios from 'axios'

const ItemsList = observer(() => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get(`${URI}/product/s`)
            .then(response => setItems(response.data))
    }, [])

    return (
        <div className="items__list__container__wrapper">
            <div className="main__container">
                <div className="items__list main__content">
                    {items.map((product, index) => (
                        <ItemCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
});
export default ItemsList;
