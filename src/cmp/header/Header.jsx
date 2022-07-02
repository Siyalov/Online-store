import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import bag from "../../img/bag.png";
import user from "../../img/user.png";
import plus from "../../img/plus.svg";
import { cartStore } from "../../store/cartStore";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="link">
          <div className="logo">Магазин</div>
        </Link>
        <div className="userpage__header">
          {localStorage.getItem('is_admin') === 'true' &&
            <Link to="/add-product" className="link">
              <img className="user-avatar" src={plus} alt="add-product" />
            </Link>
          }
          <Link to={localStorage.getItem('is_admin') === 'true' ? "/admin" : "/user"} className="link">
            <img className="user-avatar" src={user} alt="account"></img>
          </Link>
          {localStorage.getItem('is_admin') === 'false' &&
            <Link to="/bag" className="link">
              <div className="bag__wrapper__header">
                <img className="bag-logo" src={bag} alt="bag"></img>
                <div className="bag-count__wrapper">{cartStore.getCount()}</div>
              </div>
            </Link>}
        </div>
      </div>
    </header>
  );
});

export default Header;
