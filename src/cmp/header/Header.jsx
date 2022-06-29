import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import bag from "../../img/bag.png";
import user from "../../img/user.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="link">
                    <div className="logo">Магазин</div>
                </Link>
                <div className="userpage__header">
                    <Link to="/user" className="link">
                        <img className="user-avatar" src={user} alt="account"></img>
                    </Link>
                    <Link to="/bag" className="link">
                        <div className="bag__wrapper__header">
                            <img className="bag-logo" src={bag} alt="bag"></img>
                            <div className="bag-count__wrapper">
                                2
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;