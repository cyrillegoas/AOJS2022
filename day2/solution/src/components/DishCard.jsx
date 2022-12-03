import React from 'react';
import { menu } from '../menu';
import { formatToUSD } from '../utils/money';
import { DishCardButton } from './DishCardButton';

export function DishCard({ cart, dishID, isInCartPanel = false }) {
  const dish = menu.get(dishID);
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
