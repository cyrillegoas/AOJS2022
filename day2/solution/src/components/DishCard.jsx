import React from 'react';
import { formatToUSD } from '../utils/money';
import { DishCardButton } from './DishCardButton';

// TODO:
// having dish and dishID as props is prone to mistake
// (passing a dish and an ID not corresponding to it)
// should only pass ID and get the dish in the component
export function DishCard({ cart, dish, dishID, isInCartPanel = false }) {
  return (
    <>
      <div className="plate">
        <img src={`images/${dish.image}`} alt={dish.alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{dish.name}</p>
        <p className="price">{formatToUSD(dish.price)}</p>
        {!isInCartPanel && (
          <DishCardButton
            cart={cart}
            dishID={dishID}
            isInCart={cart.has(dishID)}
          />
        )}
      </div>
    </>
  );
}
