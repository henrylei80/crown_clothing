import React from "react";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <button className="waves-effect waves-light btn-small" type="submit">
      GO TO CHECKOUT
    </button>
  </div>
);

export default CartDropdown;
