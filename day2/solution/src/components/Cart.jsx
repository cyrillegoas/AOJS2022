import React from 'react';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';

export function Cart({ cart }) {
  return (
    <>
      <ul className="cart-summary">
        {Array.from(cart.content.keys()).map((key) => (
          <li key={key}>
            <CartItem cart={cart} dishID={key} />
          </li>
        ))}
      </ul>
      <CartTotal cart={cart} />
    </>
  );
}
