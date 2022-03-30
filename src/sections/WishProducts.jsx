const WishProducts = ({ children }) => {
  return (
    <section className='wish__listing__wrapper w-full flex justify-center items-center gap-2 p-1 flex-row flex-wrap mt-4'>
      <h1 className='h1 w-full block mt-4 text-center '>Wishlist</h1>
      {children}
    </section>
  );
};

export { WishProducts };
