import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState({}); // { [id]: { product, qty } }

  const addToCart = (product, qty = 1) => {
    setItems(prev => {
      const current = prev[product.id]?.qty || 0;
      return { ...prev, [product.id]: { product, qty: current + qty } };
    });
  };

  const removeFromCart = (id) => {
    setItems(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const updateQty = (id, qty) => {
    setItems(prev => {
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: { ...prev[id], qty } };
    });
  };

  const clearCart = () => setItems({});

  const summary = useMemo(() => {
    const lineItems = Object.values(items);
    const subtotal = lineItems.reduce((sum, li) => sum + li.product.price * li.qty, 0);
    const taxRate = 0.1;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    const count = lineItems.reduce((sum, li) => sum + li.qty, 0);
    return { subtotal, taxRate, tax, total, count };
  }, [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, summary }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
