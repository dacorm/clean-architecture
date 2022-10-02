import React, { useState } from "react";
import { useContext } from "react";
import { sushi } from "./fakeData";

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);
type ProviderProps = {
  children: React.ReactNode
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    sushi,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
