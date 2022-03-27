const Footer = () => {
  return (
    <footer className='footer section container mx-auto'>
      {' '}
      <div className='footer__container container grid gap-2 pb-3 p-2 mx-auto'>
        <div className='footer__content'>
          <h3 className='footer__title h3'>Our information</h3>

          <ul className='footer__list flex flex-col gap-1 h4'>
            <li>421201 - Mumbai</li>
            <li>Maharastra</li>
            <li>India 🇮🇳</li>
          </ul>
        </div>
        <div className='footer__content'>
          <h3 className='footer__title h3'>About Us</h3>

          <ul className='footer__links h4'>
            <li>
              <a href='#' className='footer__link'>
                Support Center
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Customer Support
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Copy Right
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title h3'>Product</h3>

          <ul className='footer__links flex flex-col gap-1 h4'>
            <li>
              <a href='#' className='footer__link'>
                Road bikes
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Mountain bikes
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Electric
              </a>
            </li>
            <li>
              <a href='#' className='footer__link'>
                Accesories
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__content'>
          <h3 className='footer__title h3'>Social</h3>

          <ul className='footer__social h2'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              className='footer__social-link'
            >
              <i className='bx bxl-facebook'></i>
            </a>

            <a
              href='https://twitter.com/'
              target='_blank'
              className='footer__social-link'
            >
              <i className='bx bxl-twitter'></i>
            </a>

            <a
              href='https://www.instagram.com/'
              target='_blank'
              className='footer__social-link'
            >
              <i className='bx bxl-instagram'></i>
            </a>
          </ul>
        </div>
      </div>
      <span className='footer__copy h5'>
        &#169; AlphaUI. All rigths reserved
      </span>
    </footer>
  );
};

export { Footer };
