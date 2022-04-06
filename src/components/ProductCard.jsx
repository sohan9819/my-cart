import { Link } from 'react-router-dom';
import { useCartContext, useWishContext } from '../context/context';

const ProductCard = (props) => {
  const product = props.value;
  const { _id, title, price, org_price, description, category, image, rating } =
    product;

  const { wishDispatch, isItemInWishlist } = useWishContext();

  const { cartDispatch, isItemInCart } = useCartContext();

  return (
    <article
      key={_id}
      className='product__card  relative  overflow-hide box-shadow rounded-s'
    >
      <div className='card__badge__basic absolute w-max h4 color-black bg-orange p-1 rounded-s bold box-shadow'>
        Latest
      </div>
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
      <div className='like__btn bg-white rounded-f flex justify-center items-center absolute'>
        <i className='fas fa-heart color-grey h4'></i>
      </div>
      <div className='card__content-box'>
        <img
          src={image}
          alt='Card Image'
          className='card__content-box--image'
        ></img>
        <div className='card__heading mx-2'>
          <h3 className='card__heading--main h3 mt-1 bold'>{`${title.slice(
            0,
            18
          )}...`}</h3>
          <h3 className='card__heading--sub h3 mt-1 semibold '>
            ₹{price}{' '}
            <span className='h4 color-grey line-through'>₹{org_price}</span>
          </h3>
        </div>
        <p className='text-4 ml-2 mt-1 color-red'>
          {((price * 100) / org_price).toFixed(2)}% off
        </p>
        <h5 className='h4 ml-2 mt-1'>
          {' '}
          {/* <i>Category : </i> */}
          {category} <br />
          {/* <i>Rating : </i> */}
          {rating.rate} <i class='bx bxs-star color-orange'></i> |{' '}
          {rating.count}{' '}
        </h5>
      </div>
      <div className='card__links flex flex-col justify-center items-center p-1 gap-1 w-full'>
        {/* <button
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
          }}
          className='btn bg-orange w-full h4 gap-1 flex justify-center items-center'
        >
          {isItemInWishlist(product)
            ? 'Remove from Wishlist'
            : 'Add to Wishlist'}
          <i className='bx bx-heart h3'></i>
        </button> */}
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
          className='btn p-1 color-white  w-full h4 gap-1 flex justify-center items-center'
        >
          {isItemInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
          <i className='bx bx-cart h3'></i>
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
          className='btn  w-full h4 gap-1 flex justify-center items-center'
        >
          By Now
        </Link>
      </div>
    </article>
  );
};

export { ProductCard };
