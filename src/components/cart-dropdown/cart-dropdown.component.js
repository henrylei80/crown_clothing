import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems} from "../../redux/cart/cart.selectors";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map(cartItem => (
    <CartItem  key={cartItem.id} item={cartItem}/>
    ))}
    </div>
    <button className="waves-effect waves-light btn-small" type="submit">
      GO TO CHECKOUT
    </button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
