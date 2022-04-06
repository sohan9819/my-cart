const cartReducer = (cartItems, { type, payload }) => {
  switch (type) {
    case 'Add to Cart':
      return cartItems.some((item) => item._id === payload._id)
        ? cartItems
        : [...cartItems, { ...payload, quantity: 1 }];
    case 'Remove from Cart':
      return cartItems.filter((item) => {
        return item._id !== payload._id;
      });
    case 'Plus':
      return cartItems.map((item) =>
        item._id === payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case 'Minus':
      return payload.quantity <= 1
        ? cartItems.filter((item) => {
            return item._id !== payload._id;
          })
        : cartItems.map((item) =>
            item._id === payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

    default:
      break;
  }
};

export { cartReducer };
