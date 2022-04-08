import { useCartContext, useWishContext } from '../context/context';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { notify } from '../utilities/toastNotify';

export const ProductDetailCard = (props) => {
  const { cartDispatch, isItemInCart } = useCartContext();
  const { wishDispatch, isItemInWishlist } = useWishContext();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    props.product && setProduct(props.product);
  }, [props.product]);

  const {
    _id,
    title,
    price,
    org_price,
    description,
    category,
    rating,
    image,
    quantity,
  } = product;

  return Object.keys(product).length === 0 ? (
    <h1 className='h1 w-full text-center mt-8'>🙈🙉🙊</h1>
  ) : (
    <article
      key={_id}
      className='product__detail__card mt-2 grid p-1 box-shadow relative'
    >
      <div className='like__btn__badge absolute w-max h4'>
        <button
          onClick={() => {
            isItemInWishlist(product)
              ? wishDispatch({
                  type: 'Remove from Wishlist',
                  payload: product,
                })
              : wishDispatch({
                  type: 'Add to Wishlist',
                  payload: product,
                });

            isItemInWishlist(product)
              ? notify('product removed from the wishlist', 'warn')
              : notify('product added to the wishlist', 'success');
          }}
          className='bg color-red'
        >
          {isItemInWishlist(product) ? (
            <i class='bx bxs-heart h3'></i>
          ) : (
            <i class='bx bx-heart h3'></i>
          )}
        </button>
      </div>
      <div className='detail__card__image p-4'>
        <img
          src={image}
          style={{ objectFit: 'contain' }}
          className='w-full h-full '
        />
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
          {category} <br />
          {rating && rating.rate} <i class='bx bxs-star color-orange'></i> |
          {rating && rating.count}
        </h5>

        <p className='h4 mt-1'>{description}</p>
      </div>
      <div className='detail__card__btns flex justify-center items-center flex-col gap-1 p-1'>
        <button
          onClick={() => {
            isItemInCart(product)
              ? cartDispatch({
                  type: 'Remove from Cart',
                  payload: product,
                })
              : cartDispatch({
                  type: 'Add to Cart',
                  payload: product,
                });
            isItemInCart(product)
              ? notify('product removed from the cart', 'warn')
              : notify('product added to the cart', 'success');
          }}
          className='btn--red p-1 color-white bg-red w-full h4 gap-1 flex justify-center items-center'
        >
          {product && isItemInCart(product)
            ? 'Remove from Cart'
            : 'Add to Cart'}
          <i className='bx bx-trash h3'></i>
        </button>

        <Link
          onClick={() => {
            isItemInCart(product)
              ? ''
              : cartDispatch({
                  type: 'Add to Cart',
                  payload: product,
                });
          }}
          to='/cart'
          className='btn w-full h4 gap-1 flex justify-center items-center'
        >
          By Now
        </Link>
      </div>
    </article>
  );
};

// _id;
// category;
// description;
// image;
// org_price;
// price;
// rating;
// title;
