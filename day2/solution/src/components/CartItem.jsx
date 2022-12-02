import React from 'react';
import { DishCard } from './DishCard';

export function CartItem({ dish, quantity }) {
  return (
    <>
      <DishCard dish={dish} isInCartPanel />
      <div className="quantity__wrapper">
        <button className="decrease" type="button">
          <img src="icons/chevron.svg" alt="" />
        </button>
        <div className="quantity">{quantity}</div>
        <button className="increase" type="button">
          <img src="icons/chevron.svg" alt="" />
        </button>
      </div>
      <div className="subtotal">{`$${(dish.price / 100) * quantity}`}</div>
    </>
  );
}
