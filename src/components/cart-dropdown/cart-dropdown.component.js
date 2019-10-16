import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    { cartItems.length ?
    (cartItems.map(cartItem => (
    <CartItem  key={cartItem.id} item={cartItem}/>
  ))):
  (<label className="empty-message">Your cart is empty</label>)
 }
    </div>
    <button onClick={() => {history.push('/checkout'); dispatch(toggleCartHidden())}}  className="waves-effect waves-light btn-small" type="submit">
        GO TO CHECKOUT
    </button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));