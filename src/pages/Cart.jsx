import {
  Nav,
  ScrollUp,
  CartProductCard,
  CartBill,
} from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { CartWrapper, CartProducts } from '../sections/sections';

const Cart = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <CartWrapper>
          <CartProducts>
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
            <CartProductCard />
          </CartProducts>
          <CartBill />
        </CartWrapper>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Cart };
