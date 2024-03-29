import { Link } from 'react-router-dom';
import { useThemeContext, useFilterContext } from '../context/context';
import { useEffect, useRef, useState } from 'react';

import {
  useCartContext,
  useWishContext,
  useAuthContext,
} from '../context/context';

const Nav = () => {
  const { theme, setTheme } = useThemeContext();

  const [navState, setNavState] = useState(false);

  const themeIcon = useRef(null);

  const cartBadge = useRef(null);
  const { cartItems } = useCartContext();

  const wishlistBadge = useRef(null);
  const { wishItems } = useWishContext();

  const { filterState, filterDispatch } = useFilterContext();

  const { auth } = useAuthContext();

  const themeHandler = (val, icon) => {
    switch (val) {
      case true:
        document.body.classList.add('dark-theme');
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
        break;
      case false:
        document.body.classList.remove('dark-theme');
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    themeHandler(theme, themeIcon.current);
  });

  useEffect(() => {
    if (cartItems.length == 0) {
      cartBadge.current.style.display = 'none';
    } else {
      cartBadge.current.style.display = '';
    }
  }, [cartItems]);

  useEffect(() => {
    if (wishItems.length == 0) {
      wishlistBadge.current.style.display = 'none';
    } else {
      wishlistBadge.current.style.display = '';
    }
  }, [wishItems]);

  const onClickHandler = (evt) => {
    setTheme((prev) => !prev);
    themeHandler(theme, evt.target);
  };

  const navHandler = (action) => {
    switch (action) {
      case 'open':
        setNavState(true);
        break;
      case 'close':
        setNavState(false);
        break;
      default:
        break;
    }
  };

  return (
    <nav className='nav container mx-auto px-1 flex justify-between items-center'>
      <Link to='/' className='nav__logo h3 flex items-center'>
        <i className='bx bx-cart nav__logo-icon h2'></i> MY Cart
      </Link>

      <div className={`nav__menu ${navState ? 'show-menu' : ''}`} id='nav-menu'>
        {/* <div className={navToggle} id='nav-menu'> */}
        <ul className='nav__list gap-4'>
          <li>
            <i
              className='bx bx-search-alt-2 bg-grey w-full col-2-0f-4 m-auto my-1 rounded-s nav__search px-1 h4 flex flex-row flex-nowrap items-center justify-center'
              // data-navChild='search'
            >
              <input
                type='text'
                name='search box'
                id='search__box'
                placeholder='Search'
                className='ml-1 py-1 rounded-s nav__search-box'
                value={filterState.search}
                onChange={(evt) => {
                  navigate('/products');
                  filterDispatch({ type: 'search', payload: evt.target.value });
                }}
              />
            </i>
          </li>

          <li>
            {auth.isAuth ? (
              <Link to='/profile' className='btn h4 rounded-m'>
                {auth.user?.username}
              </Link>
            ) : (
              <Link to='/auth' className='btn  btn-me h4'>
                LogIn
              </Link>
            )}
          </li>

          <li>
            <Link
              to='/products'
              className='h4 bg-orange color-dark-grey-1 p-1 '
            >
              Shop Now !
            </Link>
          </li>
        </ul>

        <div
          onClick={() => {
            navHandler('close');
          }}
          className='nav__close h2'
          id='nav-close'
        >
          <i className='bx bx-x'></i>
        </div>
      </div>

      <div className='nav__btns flex gap-2'>
        {/* <!-- Theme change button --> */}
        <button
          ref={themeIcon}
          onClick={onClickHandler}
          className='bx bx-moon change-theme h3'
          id='theme-button'
          style={{ border: 'none', background: 'none' }}
        ></button>
        <div className='nav__shop h3' id='cart-heart'>
          <Link to='/wishlist' className='bx bx-heart badge__basic-wrapper'>
            <span
              style={{ display: 'none' }}
              ref={wishlistBadge}
              className='badge__basic-content'
            >
              {wishItems.length}
            </span>
          </Link>
        </div>
        <div className='nav__shop h3' id='cart-shop'>
          <Link to='/cart' className='bx bx-shopping-bag badge__basic-wrapper'>
            <span
              style={{ display: 'none' }}
              ref={cartBadge}
              className='badge__basic-content'
            >
              {cartItems.length}
            </span>
          </Link>
        </div>
        <div
          onClick={() => {
            navHandler('open');
          }}
          className='nav__toggle h3'
          id='nav-toggle'
        >
          <i className='bx bx-grid-alt'></i>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
