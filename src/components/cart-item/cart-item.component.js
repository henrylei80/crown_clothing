import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <label className="name">{name}</label>
      <label className="price">
        {quantity} x ${price}
      </label>
    </div>
  </div>
);

export default CartItem;
