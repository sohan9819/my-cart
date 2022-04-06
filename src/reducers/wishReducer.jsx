const wishReducer = (wishItems, { type, payload }) => {
  switch (type) {
    case 'Add to Wishlist':
      return wishItems.some((item) => item._id === payload._id)
        ? wishItems
        : [...wishItems, payload];

    case 'Remove from Wishlist':
      return wishItems.filter((item) => {
        return item._id !== payload._id;
      });
  }
};

export { wishReducer };
