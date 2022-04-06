import { createContext, useContext, useReducer } from 'react';
import { wishReducer } from '../reducers/reducers';

const WishContext = createContext();

const WishContextProvider = ({ children }) => {
  const [wishItems, wishDispatch] = useReducer(wishReducer, []);

  const isItemInWishlist = (product) => {
    return wishItems.some((item) => item._id === product._id);
  };

  return (
    <WishContext.Provider
      value={{
        wishItems,
        wishDispatch,
        isItemInWishlist,
      }}
    >
      {children}
    </WishContext.Provider>
  );
};

const useWishContext = () => useContext(WishContext);

export { WishContextProvider, useWishContext };
