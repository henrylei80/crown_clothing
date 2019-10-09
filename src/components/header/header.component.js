import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">
        <Logo />
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/shop" className="options">
            SHOP
          </Link>
        </li>
        <li>
          <Link to="/shop" className="options">
            CONTACT
          </Link>
        </li>
        <li>
          {currentUser ? (
            <div onClick={() => auth.signOut()} className="options">
              SIGN OUT
            </div>
          ) : (
            <Link to="/signin" className="options">
              SIGN IN
            </Link>
          )}
        </li>
        <li>
          <Link to="/shop" className="options">
            <i className="material-icons">add_shopping_cart</i>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
