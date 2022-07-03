import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bag from "../../img/bag.png";
import user from "../../img/user.png";
import plus from "../../img/plus.svg";
import { cartStore } from "../../store/cartStore";
import { observer } from "mobx-react-lite";
import {
  ADD_PRODUCT_ROUTE, ADMIN_ROUTE, BAG_ROUTE, SHOP_ROUTE, USER_ROUTE
} from "../consts/consts";
import { fetchCart } from "../../http/userAPI";

const Header = observer(() => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("is_admin"));
  const [cartCount, setCartCount] = useState(localStorage.getItem("cartCount"));
  useEffect(() => {
    setIsAdmin(localStorage.getItem("is_admin"))
  }, [])
  let [bagCount, setBagCount] = useState([]);
  useEffect(() => {
    fetchCart().then(data => { setBagCount(data) });
  }, [])
  // useEffect(() => {
  //   setCartCount(localStorage.getItem("cartCount"))
  // }, [])
  const getCount = () => {
    let sum = 0;
    for (let i = 0; i < bagCount.length; i++) {
      sum += +bagCount[i].count
    }
    return sum;
  }
  return (
    <header className="header">
      <div className="header__content">
        <Link to={SHOP_ROUTE} className="link">
          <div className="logo">Магазин</div>
        </Link>
        <div className="userpage__header">
          {localStorage.getItem("is_admin") === "true" &&
            <Link to={ADD_PRODUCT_ROUTE} className="link">
              <img className="user-avatar" src={plus} alt="add-product" />
            </Link>
          }
          <Link to={isAdmin === "true" ? ADMIN_ROUTE : USER_ROUTE} className="link">
            <img className="user-avatar" src={user} alt="avatar"></img>
          </Link>
          {localStorage.getItem("is_admin") === "false" &&
            <Link to={BAG_ROUTE} className="link">
              <div className="bag__wrapper__header">
                <img className="bag-logo" src={bag} alt="bag"></img>
                <div className="bag-count__wrapper">{getCount(bagCount)}</div>
              </div>
            </Link>}
        </div>
      </div>
    </header>
  );
});

export default Header;
