import React from 'react';
import { Cart } from './components/Cart';
import { Menu } from './components/Menu';
import { Panel } from './components/Panel';

export function App() {
  return (
    <>
      <Panel title="To Go Menu">
        <Menu />
      </Panel>
      <Panel isCart title="Your Cart">
        <Cart />
      </Panel>
    </>
  );
}
