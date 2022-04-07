import { Nav, ScrollUp, ProductCard, Filters } from '../components/components';
import { useDataContext, useFilterContext } from '../context/context';
import { Header, Main, Footer } from '../layouts/layouts';
import {
  ProductsPageWrapper,
  ProductListWrapper,
  FilterListWrapper,
} from '../sections/sections';

const Productlist = () => {
  const { products, loader } = useDataContext();
  const { filteredProducts } = useFilterContext();

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
            {loader && <h1 className='h1 w-full text-center'>Loading....</h1>}
            {filteredProducts &&
              filteredProducts.map((product) => {
                return <ProductCard value={product} key={product._id} />;
              })}

            {filteredProducts.length === 0 ? (
              <h1 className='h1 w-full text-center'>
                No items !!! <br />
                🙈🙉🙊
              </h1>
            ) : (
              ''
            )}
          </ProductListWrapper>
        </ProductsPageWrapper>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export { Productlist };
