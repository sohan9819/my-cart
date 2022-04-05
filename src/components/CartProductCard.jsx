import { useState } from 'react';
import { useCartContext } from '../context/context';

const CartProductCard = (props) => {
  const product = props.value;
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

  const [quan, setQuan] = useState(quantity);

  const { removeFromCart, cartQuantityPlus, cartQuantityMinus, addToCart } =
    useCartContext();

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

        <div className='quantity-input mt-2'>
          <button
            onClick={() => {
              cartQuantityMinus(product);
              setQuan((prev) => prev - 1);
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
              cartQuantityPlus(product);
              setQuan((prev) => prev + 1);
            }}
            className='plus'
          ></button>
        </div>
      </div>
      <div className='detail__card__btns flex justify-center items-center flex-col gap-1 p-1'>
        <button
          onClick={() => {
            removeFromCart(product);
          }}
          className='btn--red p-1 color-white bg-red w-full h4 gap-1 flex justify-center items-center'
        >
          Remove
          <i className='bx bx-trash h3'></i>
        </button>
        <a
          href='#'
          className='btn w-full h4 gap-1 flex justify-center items-center'
        >
          Move to
          <i className='bx bx-heart h3'></i>
        </a>
      </div>
    </article>
  );
};

export { CartProductCard };
