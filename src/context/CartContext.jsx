import { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer } from '../reducers/reducers';
const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, cartDispatch] = useReducer(cartReducer, []);

  const isItemInCart = (product) => {
    return cartItems.some((item) => item._id === product._id);
  };

  useEffect(() => {
    console.table(cartItems);
  });

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartDispatch,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
