import React, { createContext, useState } from "react";
import * as items from "../../organisms/ItemCard/ItemCard";

/**
 * Type for COntext
 */
type ShoppingCartContextType = {
  cartItems: items.Sneaker[];
  addItem: (sneaker: items.Sneaker) => void;
  deleteItem: (sneaker: items.Sneaker) => void;
};

/**
 * Default Values for Context
 */
const defaultValues: ShoppingCartContextType = {
  cartItems: [],
  addItem: () => {},
  deleteItem: () => {},
};

/**
 * Create Context with default values
 */
const ShoppingCartContext =
  createContext<ShoppingCartContextType>(defaultValues);

/**
 * ShoppingCartContextProvider access it to get all Functions
 */
export const ShoppingCartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<items.Sneaker[]>(
    defaultValues.cartItems
  );

  const addItem = (sneaker: items.Sneaker) => {
    sneaker.amount += 1;
    setCartItems((oldCartItems) => [...oldCartItems, sneaker]);
  };

  const deleteItem = (sneaker: items.Sneaker) => {
    setCartItems(cartItems.filter((item) => item.id !== sneaker.id));
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addItem, deleteItem }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
