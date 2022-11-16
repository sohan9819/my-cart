import { Route, Routes, Navigate } from 'react-router-dom';
import {
  Home,
  Cart,
  Wishlist,
  Auth,
  Productlist,
  NotFound,
  ProductDetail,
  Profile,
} from '../pages/pages';
import { useAuthContext } from '../context/context';

import Mockman from 'mockman-js';

const PageRoutes = () => {
  const { auth } = useAuthContext();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Productlist />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route
        path='/cart'
        element={auth.isAuth ? <Cart /> : <Navigate to='/auth' />}
      />
      <Route
        path='/wishlist'
        element={auth.isAuth ? <Wishlist /> : <Navigate to='/auth' />}
      />
      <Route
        path='/profile'
        element={auth.isAuth ? <Profile /> : <Navigate to='/' />}
      />
      <Route
        path='/auth'
        element={auth.isAuth ? <Navigate to='/' /> : <Auth />}
      />
      <Route path='*' element={<NotFound />} />

      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};

export { PageRoutes };
