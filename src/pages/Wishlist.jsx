import { Nav, ScrollUp, WishProductCard } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { WishProducts } from '../sections/sections';

const Wishlist = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <WishProducts>
          <WishProductCard />
          <WishProductCard />
          <WishProductCard />
          <WishProductCard />
          <WishProductCard />
          <WishProductCard />
          <WishProductCard />
        </WishProducts>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Wishlist };
