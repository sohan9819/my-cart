import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Cart,
  Wishlist,
  Auth,
  Productlist,
  NotFound,
  ProductDetail,
} from '../pages/pages';

import Mockman from 'mockman-js';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Productlist />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='*' element={<NotFound />} />

      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};

export { PageRoutes };
