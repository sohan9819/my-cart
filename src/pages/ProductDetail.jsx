// _id: uuid(),
// title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
// price: 109.95,
// description:
//   'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
// category: "Men's Clothing",
// image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
// rating: {
//   rate: 3.9,
//   count: 120,

import { products } from '../backend/db/products';
// import { useDataContext } from '../context/context';
import { Link, useParams } from 'react-router-dom';
import { ProductDetailCard } from '../components/components';
import { Header, Main, Footer } from '../layouts/layouts';
import { Nav, ScrollUp } from '../components/components';
import { useEffect, useState } from 'react';
export const ProductDetail = () => {
  const { productId } = useParams();
  // const { products } = useDataContext();

  const getProductDetails = (products, productId) => {
    return products.find((product) => product._id === productId);
  };

  const [product, setProduct] = useState({});

  useEffect(() => {
    // console.log(products);
    // console.log(productId);
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
