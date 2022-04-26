export const filterReducer = (filterState, { type, payload }) => {
  switch (type) {
    case 'clear':
      return {
        ...filterState,
        priceRange: 1000,
        category: 'all',
        rating: 'all',
        sortBy: 'none',
        search: '',
      };

    case 'data':
      return { ...filterState, products: payload };

    case 'sortBy':
      return { ...filterState, sortBy: payload };

    case 'priceRange':
      return { ...filterState, priceRange: Number(payload) };

    case 'category':
      return { ...filterState, category: payload };

    case 'rating':
      return { ...filterState, rating: Number(payload) };

    case 'search':
      return { ...filterState, search: payload };

    default:
      break;
  }
};
