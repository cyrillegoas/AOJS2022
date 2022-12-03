import React from 'react';
import { formatToUSD } from '../utils/money';
import { DishCard } from './DishCard';

export function CartItem({ cart, dish, dishID }) {
  return (
    <>
      <DishCard cart={cart} dish={dish} dishID={dishID} isInCartPanel />
      <div className="quantity__wrapper">
        <button
          className="decrease"
          type="button"
          onClick={() => cart.decreaseQtyByID(dishID)}
        >
          <img src="icons/chevron.svg" alt="" />
        </button>
        <div className="quantity">{cart.content.get(dishID)}</div>
        <button
          className="increase"
          type="button"
          onClick={() => cart.increaseQtyByID(dishID)}
        >
          <img src="icons/chevron.svg" alt="" />
        </button>
      </div>
      <div className="subtotal">
        {formatToUSD(dish.price * cart.content.get(dishID))}
      </div>
    </>
  );
}
