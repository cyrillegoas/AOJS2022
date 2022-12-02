import React from 'react';
import { menu } from '../menu';
import { DishCard } from './DishCard';

export function Menu() {
  return (
    <ul className="menu">
      {Array.from(menu.keys()).map((id) => (
        <li key={id}>
          <DishCard dish={menu.get(id)} />
        </li>
      ))}
    </ul>
  );
}
