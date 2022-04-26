const priceRange = (filterState, products) => {
  return [...products].filter(
    (product) => product.price < filterState.priceRange
  );
};

// const electronics = (filterState, products) =>
//   products.filter((product) => product.category === 'Electronics');
// const jewelery = (filterState, products) =>
//   products.filter((product) => product.category === 'Jewelery');
// const mensClothing = (filterState, products) =>
//   products.filter((product) => product.category === "Men's Clothing");
// const womensClothing = (filterState, products) =>
//   products.filter((product) => product.category === "Women's Clothing");

const productCategoryFilter = (filterCategoryValue, products) =>
  products.filter((product) => product.category === filterCategoryValue);

const category = (filterState, products) => {
  switch (filterState.category) {
    case 'all':
      return products;
    case 'electronics':
      return productCategoryFilter('Electronics', products);
    case 'jewelery':
      return productCategoryFilter('Jewelery', products);
    case 'mensClothing':
      return productCategoryFilter("Men's Clothing", products);
    case 'womensClothing':
      return productCategoryFilter("Women's Clothing", products);

    default:
      break;
  }
};

// Men's Clothing
// Women's Clothing
// Electronics
// Jewelery

const rating = (filterState, products) => {
  switch (filterState.rating) {
    case 'all':
      return products;

    default:
      return products.filter(
        (product) => Number(product.rating.rate) >= Number(filterState.rating)
      );
  }
};

const sortBy = (filterState, products) => {
  switch (filterState.sortBy) {
    case 'Low to High':
      return products.sort(
        (prev, curr) => Number(prev.price) - Number(curr.price)
      );

    case 'High to Low':
      return products.sort(
        (prev, curr) => Number(curr.price) - Number(prev.price)
      );

    case 'none':
      return products;

    default:
      break;
  }
};

const search = (filterState, products) => {
  const regex = new RegExp(filterState.search, 'gi');
  return products.filter(
    (product) => product.title.match(regex) || product.category.match(regex)
  );
};

export { priceRange, category, rating, sortBy, search };
