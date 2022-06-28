import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import bag from "../../img/bag.png";
import user from "../../img/user.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="logo">Магазин</div>
                <div className="menu__header"></div>
                <div className="userpage__header">
                    <img className="user-avatar" src={user}></img>
                    <div className="bag__wrapper__header">
                        <img className="bag-logo" src={bag}></img>
                        <div className="bag-count__wrapper">
                            2
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;