import { useState } from 'react';
import { useCartContext, useWishContext } from '../context/context';
import { notify } from '../utilities/toastNotify';

const CartProductCard = ({ product }) => {
  const {
    _id,
    title,
    price,
    org_price,
    description,
    category,
    image,
    rating,
    quantity,
  } = product;

  const { cartDispatch } = useCartContext();
  const { wishDispatch, isItemInWishlist } = useWishContext();

  return (
    <article
      key={_id}
      className='product__detail__card mt-2 grid p-1 box-shadow'
    >
      <div className='detail__card__image p-4'>
        <img src={image} className='w-full h-full' />
      </div>
      <div className='detail__card__info pl-2'>
        <h4 className='h4 semibold mt-2'>{title}</h4>
        <h3 className='h3 mt-1'>
          ₹{price}{' '}
          <span className='original__cost h4 color-grey'>₹{org_price}</span>
        </h3>
        <h4 className='h4 color-red bold'>
          {((price * 100) / org_price).toFixed(2)}% off
        </h4>

        <h5 className='h4 mt-1'>
          {' '}
          {/* <i>Category : </i> */}
          {category} <br />
          {/* <i>Rating : </i> */}
          {rating.rate} <i class='bx bxs-star color-orange'></i> |{' '}
          {rating.count}{' '}
        </h5>

        <div className='quantity-input mt-2'>
          <button
            onClick={() => {
              cartDispatch({ type: 'Minus', payload: product });
            }}
            className='minus items-center justify-center relative'
          ></button>
          <input
            className='quantity h4 bold text-center font-primary'
            min='0'
            name='quantity'
            value={quantity}
            type='number'
          />
          <button
            onClick={() => {
              cartDispatch({ type: 'Plus', payload: product });
            }}
            className='plus'
          ></button>
        </div>
      </div>
      <div className='detail__card__btns flex justify-center items-center flex-col gap-1 p-1'>
        <button
          onClick={() => {
            cartDispatch({
              type: 'Remove from Cart',
              payload: product,
            });
            notify('Product removed from cart', 'warn');
          }}
          className='btn--red p-1 color-white bg-red w-full h4 gap-1 flex justify-center items-center'
        >
          Remove
          <i className='bx bx-trash h3'></i>
        </button>
        <button
          onClick={() => {
            isItemInWishlist(product)
              ? ''
              : wishDispatch({
                  type: 'Add to Wishlist',
                  payload: product,
                });
            cartDispatch({
              type: 'Remove from Cart',
              payload: product,
            });
            notify('Product moved to wishlist', 'success');
          }}
          className='btn w-full h4 gap-1 flex justify-center items-center'
        >
          Move to
          <i className='bx bx-heart h3'></i>
        </button>
      </div>
    </article>
  );
};

export { CartProductCard };
