const WishProductCard = () => {
  return (
    <div className='product__detail__card mt-2 grid p-1 box-shadow'>
      <div className='detail__card__image p-4'>
        <img src='./assets/img/product_image-1.png' className='w-full h-full' />
      </div>
      <div className='detail__card__info pl-2'>
        <h4 className='h4 semibold mt-2'>Mens Premium Jacket</h4>
        <h3 className='h3 mt-1'>
          ₹2000 <span className='original__cost h4 color-grey'>₹3000</span>
        </h3>
        <h4 className='h4 color-red bold'>50% off</h4>
      </div>
      <div className='detail__card__btns flex justify-center items-center flex-col gap-1 p-1'>
        <a
          href='#'
          className='btn--red p-1 color-white bg-red w-full h4 gap-1 flex justify-center items-center'
        >
          Remove
          <i className='bx bx-trash h3'></i>
        </a>
        <a
          href='#'
          className='btn w-full h4 gap-1 flex justify-center items-center'
        >
          Add to Cart
          <i className='bx bx-cart h3'></i>
        </a>
      </div>
    </div>
  );
};

export { WishProductCard };
