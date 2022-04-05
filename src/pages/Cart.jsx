import {
  Nav,
  ScrollUp,
  CartProductCard,
  CartBill,
} from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { CartWrapper, CartProducts } from '../sections/sections';
import { useCartContext } from '../context/context';

const Cart = () => {
  const { cartItems, removeFromCart } = useCartContext();

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <CartWrapper>
          <CartProducts>
            {cartItems.length === 0 ? (
              <h1 className='h1'>
                No items in the cart <br /> 🙈🙉🙊
              </h1>
            ) : (
              ''
            )}
            {cartItems &&
              cartItems.map((item) => {
                return <CartProductCard value={item} key={item._id} />;
              })}
          </CartProducts>
          {/* <CartBill /> */}
          {cartItems.length !== 0 ? <CartBill products={cartItems} /> : ''}
        </CartWrapper>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Cart };
