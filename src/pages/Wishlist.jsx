import { Nav, ScrollUp, WishProductCard } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { WishProducts } from '../sections/sections';
import { useWishContext } from '../context/context';

const Wishlist = () => {
  const { wishItems } = useWishContext();

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <WishProducts>
          {wishItems.length === 0 ? (
            <h1 className='h1'>No items in the wishlist 🙊🙉🙈</h1>
          ) : (
            ''
          )}

          {wishItems &&
            wishItems.map((item) => {
              return <WishProductCard value={item} key={item._id} />;
            })}
        </WishProducts>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Wishlist };
