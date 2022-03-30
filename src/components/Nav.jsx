import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import { useState } from 'react';

const Nav = () => {
  const { theme, setTheme } = useThemeContext();

  const [navState, setNavState] = useState(false);

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

  const onClickHandler = (evt) => {
    setTheme((prev) => !prev);
    themeHandler(theme, evt.target);
    console.log(theme);
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
        <ul className='nav__list'>
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
              />
            </i>
          </li>

          <li>
            <Link to='/auth' className='btn bnt__link btn-me h4'>
              SignIN
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
          onClick={onClickHandler}
          className='bx bx-moon change-theme h3'
          id='theme-button'
          style={{ border: 'none', background: 'none' }}
        ></button>
        <div className='nav__shop h3' id='cart-heart'>
          <Link
            to='/wishlist'
            className='bx bx-heart badge__basic-content-s'
          ></Link>
        </div>
        <div className='nav__shop h3' id='cart-shop'>
          <Link
            to='/cart'
            className='bx bx-shopping-bag badge__basic-content-s'
          ></Link>
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
