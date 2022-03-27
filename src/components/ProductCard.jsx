const ProductCard = () => {
  return (
    <div className='product__card  relative  overflow-hide box-shadow rounded-s'>
      <div className='card__badge__basic absolute w-max h4 color-black bg-orange p-1 rounded-s bold box-shadow'>
        Latest
      </div>
      <div className='like__btn bg-white rounded-f flex justify-center items-center absolute'>
        <i className='fas fa-heart color-grey h4'></i>
      </div>
      <div className='card__content-box'>
        <img
          src='https://source.unsplash.com/random/500x700'
          alt='Card Image'
          className='card__content-box--image'
        ></img>
        <div className='card__heading mx-2'>
          <h1 className='card__heading--main h3 mt-1 bold'>
            Our Changing planet
          </h1>
          <h2 className='card__heading--sub h2 mt-1 semibold '>
            ₹2000 <span className='h4 color-grey line-through'>₹2000</span>
          </h2>
        </div>
        <p className='text-4 ml-2 mt-1 color-red'>50% off</p>
      </div>
      <div className='card__links flex flex-col justify-center items-center p-1 gap-1 w-full'>
        <a
          href='#'
          className='btn bg-orange w-full h4 gap-1 flex justify-center items-center'
        >
          Buy now
          {/* <!-- <i className="bx bx-heart h3"></i> --> */}
        </a>
        <a
          href='#'
          className='btn p-1 color-white  w-full h4 gap-1 flex justify-center items-center'
        >
          Add to Cart
          <i className='bx bx-cart h3'></i>
        </a>
      </div>
    </div>
  );
};

export { ProductCard };
