import React from 'react';
import { Cart } from './components/Cart';
import { Menu } from './components/Menu';
import { Panel } from './components/Panel';
import { useCart } from './hook/useCart';

export function App() {
  const cart = useCart();
  return (
    <>
      <Panel title="To Go Menu">
        <Menu cart={cart} />
      </Panel>
      <Panel isCart title="Your Cart">
        <Cart cart={cart} />
      </Panel>
    </>
  );
}
