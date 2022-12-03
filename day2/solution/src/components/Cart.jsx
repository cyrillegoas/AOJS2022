import React from 'react';
import { CartItem } from './CartItem';
import { menu } from '../menu';
import { CartTotal } from './CartTotal';

export function Cart({ cart }) {
  return (
    <>
      <ul className="cart-summary">
        {Array.from(cart.content.keys()).map((key) => (
          <li key={key}>
            <CartItem cart={cart} dish={menu.get(key)} dishID={key} />
          </li>
        ))}
      </ul>
      <CartTotal cart={cart} />
    </>
  );
}
