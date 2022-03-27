const CartWrapper = ({ children }) => {
  return (
    <>
      <h2 className='h2 w-full text-center mt-8 capitalize'>Cart List(3)</h2>
      <section className='my__cart grid justify-items-center p-1 gap-1'>
        {children}
      </section>
    </>
  );
};

export { CartWrapper };
