import React from 'react';
import { formatToUSD } from '../utils/money';
import { menu } from '../menu';

export function CartTotal({ cart }) {
  const subtotal = Array.from(cart.content.keys()).reduce(
    (acc, cur) => acc + menu.get(cur).price * cart.content.get(cur),
    0
  );
  const tax = subtotal * 0.0975;
  const total = subtotal + tax;

  return (
    <div className="totals">
      <div className="line-item">
        <div className="label">Subtotal:</div>
        <div className="amount price subtotal">{formatToUSD(subtotal)}</div>
      </div>
      <div className="line-item">
        <div className="label">Tax:</div>
        <div className="amount price tax">{formatToUSD(tax)}</div>
      </div>
      <div className="line-item total">
        <div className="label">Total:</div>
        <div className="amount price total">{formatToUSD(total)}</div>
      </div>
    </div>
  );
}
