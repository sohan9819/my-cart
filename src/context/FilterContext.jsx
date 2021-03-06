import { createContext, useContext, useEffect, useReducer } from 'react';
import { filterReducer } from '../reducers/reducers';
import { useDataContext } from './context';
import {
  priceRange,
  category,
  rating,
  sortBy,
  search,
} from '../utilities/filterFunctions';

const FilterContext = createContext();

const initialFilter = {
  products: [],
  priceRange: 1000,
  category: 'all',
  rating: 'all',
  sortBy: 'none',
  search: '',
};

// Object.keys(o).reduce(function (previous, key) {
//   return  o[key] ? [...previous , key] : previous  ;
// }, []);

const FilterContextProvider = ({ children }) => {
  const { products } = useDataContext();

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  const filterCurry =
    (...func) =>
    (filterState, products) =>
      func.reduce((acc, filter) => filter(filterState, acc), products);

  useEffect(() => {
    products && filterDispatch({ type: 'data', payload: products });
  }, [products]);

  const filteredProducts = filterCurry(
    priceRange,
    category,
    rating,
    sortBy,
    search
  )(filterState, filterState.products);

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
