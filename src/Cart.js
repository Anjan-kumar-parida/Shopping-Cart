import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { Products } = props;
  return (
    <div className="cart">
      {Products.map((product) => {
        return (
          <CartItem
            product={product}
            id={product.id}
            onIncreaseQty={props.onIncreaseQty}
            onDecreaseQty={props.onDecreaseQty}
            onDeleteProduct={props.onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default Cart;
