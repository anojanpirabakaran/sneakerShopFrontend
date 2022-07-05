import React, { createContext, useState } from "react";
import * as items from "../../organisms/ItemCard/ItemCard";

type SneakerCardContextType = {
  sneaker: items.Sneaker;
  setCurrentSneaker: (sneaker: items.Sneaker) => void;
};

const defaultValues: SneakerCardContextType = {
  sneaker: {
    id: "",
    name: "",
    brand: "",
    image: "",
    price: 0,
    description: "",
    amount: 0,
  },
  setCurrentSneaker: () => {},
};

const SneakerCardContext = createContext<SneakerCardContextType>(defaultValues);

export const SneakerCardContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sneaker, setSneaker] = useState<items.Sneaker>(defaultValues.sneaker);

  const setCurrentSneaker = (sneaker: items.Sneaker) => {
    setSneaker(sneaker);
  };

  return (
    <SneakerCardContext.Provider value={{ sneaker, setCurrentSneaker }}>
      {children}
    </SneakerCardContext.Provider>
  );
};

export default SneakerCardContext;
