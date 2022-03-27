const CartBill = () => {
  return (
    <div className='cart__bill__card grid gap-1 p-2 box-shadow w-full items-center'>
      <h3 className='h3 capitalize'>Price details</h3>
      <div className='product__charges h4 w-full grid gap-1 py-1'>
        <h4 className='h4 charge__names semibold'>Price (2 items)</h4>
        <h4 className='h4 charge__price semibold text-right'>₹4999</h4>
        <h4 className='h4 charge__names semibold'>Discount</h4>
        <h4 className='h4 charge__price semibold text-right'>-₹1999</h4>
        <h4 className='h4 charge__names semibold'>Delivery Charges</h4>
        <h4 className='h4 charge__price semibold text-right'>₹4999</h4>
        <span className='total w-full flex justify-between py-1'>
          <h4 className='h4 bold total__name'>TOTAL</h4>
          <h4 className='h4 bold total__price bold'>₹3499</h4>
        </span>
      </div>
      <h4 className='h4'>You will save ₹1999 on this order</h4>
      <a
        href='#'
        className='captilize h4 btn--medium btn__basic-primary color-white text-center w-full'
      >
        Place order
      </a>
    </div>
  );
};

export { CartBill };
