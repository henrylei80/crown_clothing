import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
          </Link>
        </li>
      </ul>
      {hidden ? null : <CartDropdown />}
    </div>
  </nav>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
