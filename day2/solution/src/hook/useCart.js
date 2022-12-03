import { useState } from 'react';

export function useCart() {
  const [content, setContent] = useState(new Map());

  const copyMap = (map) => new Map(map);

  const addItemByID = (id) =>
    setContent((content) => copyMap(content).set(id, 1));

  const increaseQtyByID = (id) =>
    setContent((content) => {
      const mapCopy = copyMap(content);
      const currentQty = mapCopy.get(id);
      mapCopy.set(id, currentQty + 1);
      return mapCopy;
    });

  const decreaseQtyByID = (id) =>
    setContent((content) => {
      const mapCopy = copyMap(content);
      const currentQty = mapCopy.get(id);
      if (currentQty > 1) mapCopy.set(id, currentQty - 1);
      else mapCopy.delete(id);
      return mapCopy;
    });

  const has = (id) => content.has(id);

  return { content, addItemByID, increaseQtyByID, decreaseQtyByID, has };
}
