const ProductListWrapper = ({ children }) => {
  return (
    <div className='products__list p-1 gap-2 items-center justify-center'>
      {children}
    </div>
  );
};

export { ProductListWrapper };
