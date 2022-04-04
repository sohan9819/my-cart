import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get('/api/products')
      .then((res) => {
        setLoader(false);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log('Hello world request failed error');
        console.error(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ products, loader }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataContextProvider, useDataContext };
