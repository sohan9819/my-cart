const ProductsPageWrapper = ({ children }) => {
  return (
    <section className='product__listing__wrapper grid mt-6'>
      {children}
    </section>
  );
};

export { ProductsPageWrapper };
