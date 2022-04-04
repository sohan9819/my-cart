import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item._id === product._id);

    itemIndex !== -1
      ? setCartItems((prev) => {
          product.quantity = product.quantity + 1;
          prev[itemIndex] = {
            ...product,
          };

          return prev;
        })
      : setCartItems((prev) => {
          product.quantity = 1;
          return [...prev, { ...product }];
        });
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => {
      return prev.filter((item) => item._id !== product._id);
    });
  };

  const cartQuantityPlus = (product) => {
    // addToCart(product);
    const itemIndex = cartItems.findIndex((item) => item._id === product._id);

    setCartItems((prev) => {
      product.quantity += 1;
      prev[itemIndex] = {
        ...product,
      };

      return [...prev];
    });
  };

  const cartQuantityMinus = (product) => {
    if (product.quantity <= 1) {
      removeFromCart(product);
    } else {
      const itemIndex = cartItems.findIndex((item) => item._id === product._id);

      setCartItems((prev) => {
        product.quantity -= 1;
        prev[itemIndex] = {
          ...product,
        };

        return [...prev];
      });
    }
  };

  useEffect(() => {
    console.table(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartQuantityPlus,
        cartQuantityMinus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
