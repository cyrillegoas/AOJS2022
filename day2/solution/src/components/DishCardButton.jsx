import React from 'react';

export function DishCardButton({ cart, dishID, isInCart = false }) {
  return (
    <button
      className={isInCart ? 'in-cart' : ''}
      type="button"
      onClick={() => cart.addItemByID(dishID)}
      disabled={isInCart}
    >
      {isInCart && <img src="icons/check.svg" alt="Check" />}
      {isInCart ? 'In Cart' : 'Add to Cart'}
    </button>
  );
}
