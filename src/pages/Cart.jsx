import {
  Nav,
  ScrollUp,
  CartProductCard,
  CartBill,
} from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { CartWrapper, CartProducts } from '../sections/sections';
import { useCartContext } from '../context/context';
import { Link } from 'react-router-dom';

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
                No items in the cart <br /> 🙈🙉🙊 <br />
                <Link to='/products' className='h3 btn__link p-1'>
                  <i class='bx bx-arrow-back'></i> Back to Products List{' '}
                </Link>
              </h1>
            ) : (
              ''
            )}
            {cartItems &&
              cartItems.map((item) => {
                return <CartProductCard product={item} key={item._id} />;
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
