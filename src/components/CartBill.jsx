import { useEffect, useState } from 'react';
import { useCartContext } from '../context/context';

const CartBill = (props) => {
  const cartItems = props.products;
  // const { cartItems } = useCartContext();

  const cartSize = cartItems.length;

  const totalOrgPrice = cartItems.reduce(
    (sum, item) => (sum += item.org_price * item.quantity),
    0
  );

  const totalDiscountPrice = cartItems.reduce(
    (sum, item) => (sum += item.price * item.quantity),
    0
  );

  const totalMoneySaved = totalOrgPrice - totalDiscountPrice;

  const deliveryCharge = cartSize <= 2 ? 500 : 0;

  const TotalPrice = totalDiscountPrice + deliveryCharge;

  return (
    <div className='cart__bill__card grid gap-1 p-2 box-shadow w-full items-center'>
      <h3 className='h3 capitalize'>Price details</h3>
      <div className='product__charges h4 w-full grid gap-1 py-1'>
        <h4 className='h4 charge__names semibold'>Price ({cartSize} items)</h4>
        <h4 className='h4 charge__price semibold text-right'>
          ₹{totalOrgPrice}
        </h4>
        <h4 className='h4 charge__names semibold'>Discount</h4>
        <h4 className='h4 charge__price semibold text-right'>
          -₹{totalMoneySaved}
        </h4>
        <h4 className='h4 charge__names semibold'>Delivery Charges</h4>
        <h4 className='h4 charge__price semibold text-right'>
          ₹{deliveryCharge}
        </h4>
        <span className='total w-full flex justify-between py-1'>
          <h4 className='h4 bold total__name'>TOTAL</h4>
          <h4 className='h4 bold total__price bold'>₹{TotalPrice}</h4>
        </span>
      </div>
      <h4 className='h4'>You will save ₹{totalMoneySaved} on this order</h4>
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
