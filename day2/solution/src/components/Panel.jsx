import React from 'react';

export function Panel({ isCart = false, title, children }) {
  return (
    <div className={`panel${isCart ? ' cart' : ''}`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
