import { Nav, ScrollUp, ProductCard, Filters } from '../components/components';
import { useDataContext } from '../context/DataContext';
import { Header, Main, Footer } from '../layouts/layouts';
import {
  ProductsPageWrapper,
  ProductListWrapper,
  FilterListWrapper,
} from '../sections/sections';

const Productlist = () => {
  const { products, loader } = useDataContext();

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <ProductsPageWrapper>
          <FilterListWrapper>
            <Filters />
          </FilterListWrapper>
          <ProductListWrapper>
            {loader && <h1>Loading....</h1>}
            {products &&
              products.map((product) => {
                return <ProductCard value={product} key={product._id} />;
              })}
          </ProductListWrapper>
        </ProductsPageWrapper>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Productlist };
