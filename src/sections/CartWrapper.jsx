import { useCartContext } from '../context/context';

const CartWrapper = ({ children }) => {
  const { cartItems } = useCartContext();
  const cartSize = cartItems.length;
  return (
    <>
      <h2 className='h2 w-full text-center mt-8 capitalize'>
        {/* Cart List({cartSize}) */}
        {cartSize !== 0 ? `Cart List (${cartSize})` : ''}
      </h2>
      <section className='my__cart grid justify-items-center p-1 gap-1'>
        {children}
      </section>
    </>
  );
};

export { CartWrapper };
