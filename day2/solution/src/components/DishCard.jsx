import React from 'react';

export function DishCard({ dish, isInCartPanel = false }) {
  return (
    <>
      <div className="plate">
        <img src={`images/${dish.image}`} alt={dish.alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{dish.name}</p>
        <p className="price">{`$${dish.price / 100}`}</p>
        {!isInCartPanel && (
          <button className="in-cart" type="button">
            <img src="icons/check.svg" alt="Check" />
            In Cart
          </button>
        )}
      </div>
    </>
  );
}
