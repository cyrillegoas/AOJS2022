import React from 'react';
import { menu } from '../menu';
import { formatToUSD } from '../utils/money';
import { DishCard } from './DishCard';

export function CartItem({ cart, dishID }) {
  const dish = menu.get(dishID);
  const itemQuantity = cart.content.get(dishID);
  return (
    <>
      <DishCard cart={cart} dishID={dishID} isInCartPanel />
      <div className="quantity__wrapper">
        <button
          className="decrease"
          type="button"
          onClick={() => cart.decreaseQtyByID(dishID)}
        >
          <img src="icons/chevron.svg" alt="" />
        </button>
        <div className="quantity">{itemQuantity}</div>
        <button
          className="increase"
          type="button"
          onClick={() => cart.increaseQtyByID(dishID)}
        >
          <img src="icons/chevron.svg" alt="" />
        </button>
      </div>
      <div className="subtotal">{formatToUSD(dish.price * itemQuantity)}</div>
    </>
  );
}
