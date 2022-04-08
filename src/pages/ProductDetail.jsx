import { products } from '../backend/db/products';
import { Link, useParams } from 'react-router-dom';
import { ProductDetailCard } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { Nav, ScrollUp } from '../components/components';
import { useEffect, useState } from 'react';
export const ProductDetail = () => {
  const { productId } = useParams();

  const getProductDetails = (products, productId) => {
    return products.find((product) => product._id === productId);
  };

  const [product, setProduct] = useState({});

  useEffect(() => {
    product && setProduct(getProductDetails(products, productId));
  }, [product]);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <section className='w-full flex flex-col justify-center items-center gap-2 p-1 flex-row flex-wrap mt-6'>
          <ProductDetailCard product={product} />
          <br />
          <Link to='/products' className='h3 btn__link p-1'>
            <i class='bx bx-arrow-back'></i> Back to Products List{' '}
          </Link>
        </section>
      </Main>
      <Footer />
      <ScrollUp />
    </>
  );
};
