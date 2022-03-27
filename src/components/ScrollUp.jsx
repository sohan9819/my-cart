import ScrollToTop from 'react-scroll-to-top';

const ScrollUp = () => {
  return (
    <ScrollToTop
      style={{
        background: 'var(--container-color)',
        boxShadow: '0 4px 12px hsla(0, 0%, 20%, 0.1)',
      }}
      smooth
      viewBox='0 0 32 32'
      component={
        <i
          style={{ fontSize: '3rem', color: 'var(--primary-color)' }}
          className='bx bx-up-arrow-alt scrollup__icon h2'
        ></i>
      }
    ></ScrollToTop>
  );
};

export { ScrollUp };
