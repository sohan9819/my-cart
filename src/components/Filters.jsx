const Filters = () => {
  return (
    <>
      <h2 className='h3 filter__title w-full'>Filters</h2>
      <h4 className='h4 filter__clear text-right w-full'>Clear</h4>
      <div className='filter__input__range'>
        <label htmlFor='priceRange' className='h3 mb-2'>
          Price
        </label>
        <input
          type='range'
          min='0'
          max='1000'
          // value='50'
          step='250'
          list='tickmarks'
          id='priceRange'
          className='mt-1 mb-1'
        />
        <datalist id='tickmarks' className='h5 color-grey flex justify-between'>
          <option>0</option>
          <option>250</option>
          <option>500</option>
          <option>750</option>
          <option>1000</option>
        </datalist>
      </div>
      <div className='filter__category flex items-start justify-start gap-1 flex-col'>
        <h3 className='h3 mb-1'>Category</h3>
        <div className='category__checkbox'>
          <input type='checkbox' name='category' id='category_1' />
          <label htmlFor='category_1' className='h4 ml-1'>
            Mens Clothing
          </label>
        </div>
        <div className='category__checkbox'>
          <input
            type='checkbox'
            name='category'
            id='category_2'
            className='bg-white'
          />
          <label htmlFor='category_2' className='h4 ml-1'>
            Mens Clothing
          </label>
        </div>
      </div>

      <div className='filter__rating'>
        <h3 className='h3'>Rating</h3>

        <div className='rating__radio__input mt-1'>
          <input type='radio' name='rating' id='rating1' />
          <label htmlFor='rating1' className='ml-1 h4'>
            4 Stars & above
          </label>
        </div>
        <div className='rating__radio__input mt-1'>
          <input type='radio' name='rating' id='rating2' />
          <label htmlFor='rating2' className='ml-1 h4'>
            3 Stars & above
          </label>
        </div>
        <div className='rating__radio__input mt-1'>
          <input type='radio' name='rating' id='rating3' />
          <label htmlFor='rating3' className='ml-1 h4'>
            2 Stars & above
          </label>
        </div>
        <div className='rating__radio__input mt-1'>
          <input type='radio' name='rating' id='rating4' />
          <label htmlFor='rating4' className='ml-1 h4'>
            1 Stars & above
          </label>
        </div>
      </div>

      <div className='filter__sort__by'>
        <h3 className='h3'>Sort by</h3>

        <div className='sort__radio__input mt-1'>
          <input type='radio' name='sorting' id='sorting1' />
          <label htmlFor='sorting1' className='ml-1 h4'>
            Price - Low to High{' '}
          </label>
        </div>
        <div className='sorting__radio__input mt-1'>
          <input type='radio' name='sorting' id='sorting2' />
          <label htmlFor='sorting2' className='ml-1 h4'>
            Price - High to Low{' '}
          </label>
        </div>
      </div>
    </>
  );
};

export { Filters };
