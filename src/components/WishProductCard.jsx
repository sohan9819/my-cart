import { useWishContext, useCartContext } from '../context/context';

const WishProductCard = (props) => {
  const product = props.value;
  const { _id, title, price, org_price, description, category, image, rating } =
    product;

  const { wishDispatch } = useWishContext();
  const { cartDispatch, isItemInCart } = useCartContext();

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
      </div>
      <div className='detail__card__btns flex justify-center items-center flex-col gap-1 p-1'>
        <button
          onClick={() => {
            wishDispatch({ type: 'Remove from Wishlist', payload: product });
          }}
          className='btn--red p-1 color-white bg-red w-full h4 gap-1 flex justify-center items-center'
        >
          Remove
          <i className='bx bx-trash h3'></i>
        </button>
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
          }}
          className='btn w-full h4 gap-1 flex justify-center items-center'
        >
          {isItemInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
          <i className='bx bx-cart h3'></i>
        </button>
      </div>
    </article>
  );
};

export { WishProductCard };
