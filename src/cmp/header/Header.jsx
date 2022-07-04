import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import bag from "../../img/bag.png";
import user from "../../img/user.png";
import plus from "../../img/plus.svg";
import logout__icon from "../../img/logout.svg"
import { cartStore } from "../../store/cartStore";
import { observer } from "mobx-react-lite";
import {
  ADD_PRODUCT_ROUTE, ADMIN_ROUTE, BAG_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, USER_ROUTE
} from "../consts/consts";
import { fetchCart } from "../../http/userAPI";
import { usersStore } from "../../store/userStore";

const Header = observer(() => {
  useEffect(() => {
    usersStore.setRole();
  }, [])

  useEffect(() => {
    if (cartStore.getCount() < 1) {
      fetchCart().then(data => { cartStore.setProducts(data) });
    }
  }, [])


  const logout = () => {
    localStorage.clear();
    usersStore.setRole()
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to={SHOP_ROUTE} className="link">
          <div className="logo">Магазин</div>
        </Link>
        <div className="userpage__header">
          {usersStore.getRole() === "admin" &&
            <Link to={ADD_PRODUCT_ROUTE} className="link">
              <img className="user-avatar" src={plus} alt="add-product" />
            </Link>
          }
          <Link
            to={usersStore.getRole() === "admin" ? ADMIN_ROUTE : usersStore.getRole() === "user" ? USER_ROUTE : LOGIN_ROUTE}
            className="link"
          >
            <img className="user-avatar" src={user} alt="avatar"></img>
          </Link>
          {usersStore.getRole() === "user" &&
            <Link to={BAG_ROUTE} className="link">
              <div className="bag__wrapper__header">
                <img className="bag-logo" src={bag} alt="bag"></img>
                <div className="bag-count__wrapper">{cartStore.getCount()}</div>
              </div>
            </Link>}
          {(usersStore.getRole() === "user" || usersStore.getRole() === "admin") &&
            <Link to={SHOP_ROUTE} className="link" onClick={logout}>
              <img className="user-avatar" src={logout__icon} alt="logout"></img>
            </Link>}
        </div>
      </div>
    </header>
  );
});

export default Header;
