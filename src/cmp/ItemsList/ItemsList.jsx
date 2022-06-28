import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import ItemCard from "./ItemCard";

const ItemsList = () => {
    return (
        <div className="main__container">
            <div className="items__list">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>

    );
};
export default ItemsList;