import { Nav, ScrollUp, ProductCard, Filters } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import {
  ProductsPageWrapper,
  ProductListWrapper,
  FilterListWrapper,
} from '../sections/sections';

const Productlist = () => {
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductListWrapper>
        </ProductsPageWrapper>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Productlist };
