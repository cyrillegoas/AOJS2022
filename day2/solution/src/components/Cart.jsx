import React from 'react';
import { CartItem } from './CartItem';
import { menu } from '../menu';
import { CartTotal } from './CartTotal';

export function Cart() {
  return (
    <>
      <ul className="cart-summary">
        <li>
          <CartItem dish={menu.get(5)} quantity={1} />
        </li>
        <li>
          <CartItem dish={menu.get(0)} quantity={2} />
        </li>
      </ul>
      <CartTotal />
    </>
  );
}
