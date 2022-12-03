import React from 'react';
import { menu } from '../menu';
import { DishCard } from './DishCard';

export function Menu({ cart }) {
  return (
    <ul className="menu">
      {Array.from(menu.keys()).map((id) => (
        <li key={id}>
          <DishCard dishID={id} cart={cart} />
        </li>
      ))}
    </ul>
  );
}
