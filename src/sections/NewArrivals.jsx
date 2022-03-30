const NewArrivals = () => {
  return (
    <div className='new__arrivals__wrapper py-4 flex justify-center items-center flex-row gap-4'>
      <div className='col-1-0f-2 p-4 text-center new__arrival grid gap-4 box-shadow'>
        <img
          src='https://picsum.photos/200/300'
          alt='new arrivals'
          srcSet='
            https://picsum.photos/200/300 1x,
            https://picsum.photos/200/300 2x
          '
          className='new__arrival__image rounded-s h-full w-full'
        />
        <h3 className='new__arrival__title uppercase h3 text-left semibold color-red h3'>
          new arrivals
        </h3>
        <div className='new__arrival__info text-left'>
          <h2 className='bold capitalize mb-1 h2'>Summer Collection</h2>
          <p className='text-4'>
            Check out our best winter collection to stay warm in style this
            season
          </p>
        </div>
      </div>
      <div className='col-1-0f-2 p-4 text-center new__arrival grid gap-4 box-shadow'>
        <img
          src='https://picsum.photos/200/300'
          alt='new arrivals'
          srcSet='
            https://picsum.photos/200/300 1x,
            https://picsum.photos/200/300 2x
          '
          className='new__arrival__image rounded-s h-full w-full'
        />
        <h3 className='new__arrival__title uppercase h3 text-left semibold color-red'>
          new arrivals
        </h3>
        <div className='new__arrival__info text-left'>
          <h2 className='bold capitalize mb-1 h2'>Winter Collection</h2>
          <p className='text-4'>
            Check out our best winter collection to stay warm in style this
            season
          </p>
        </div>
      </div>
    </div>
  );
};

export { NewArrivals };
