import { useRef, useState } from 'react';
import { useFilterContext } from '../context/context';

const Filters = () => {
  const { filterState, filterDispatch } = useFilterContext();
  const filterCategory = useRef(null),
    filterRating = useRef(null),
    filterSort = useRef(null);

  return (
    <>
      <h2 className='h3 filter__title w-full'>Filters</h2>
      <h4
        onClick={() => {
          filterCategory.current.reset();
          filterSort.current.reset();
          filterRating.current.reset();

          filterDispatch({ type: 'clear', payload: filterState.products });
        }}
        className='h4 filter__clear text-right w-max pointer ml-auto bg-grey my-auto btn'
      >
        Clear
      </h4>

      <div className='filter__input__range'>
        <label htmlFor='priceRange' className='h3 mb-2'>
          Price
        </label>
        <input
          type='range'
          min='0'
          max='1000'
          value={filterState.priceRange}
          step='250'
          list='tickmarks'
          id='priceRange'
          className='mt-1 mb-1'
          onChange={(evt) => {
            filterDispatch({ type: 'priceRange', payload: evt.target.value });
          }}
        />
        <datalist id='tickmarks' className='h5 color-grey flex justify-between'>
          <option>0</option>
          <option>250</option>
          <option>500</option>
          <option>750</option>
          <option>1000</option>
        </datalist>
      </div>
      <form
        ref={filterCategory}
        onChange={(evt) => {
          filterDispatch({ type: 'category', payload: evt.target.value });
        }}
        className='filter__category flex items-start justify-start gap-1 flex-col'
      >
        <h3 className='h3 mb-1'>Category</h3>
        {/* <div className='category__checkbox'>
          <input value='all' type='radio' name='category' id='category_0' />
          <label htmlFor='category_0' className='h4 ml-1'>
            All
          </label>
        </div> */}
        <div className='category__checkbox'>
          <input
            value='electronics'
            type='radio'
            name='category'
            id='category_1'
          />
          <label htmlFor='category_1' className='h4 ml-1'>
            Electronics
          </label>
        </div>
        <div className='category__checkbox'>
          <input
            value='jewelery'
            type='radio'
            name='category'
            id='category_2'
          />
          <label htmlFor='category_2' className='h4 ml-1'>
            Jewelery
          </label>
        </div>
        <div className='category__checkbox'>
          <input
            value='mensClothing'
            type='radio'
            name='category'
            id='category_3'
          />
          <label htmlFor='category_3' className='h4 ml-1'>
            Men's Clothing
          </label>
        </div>
        <div className='category__checkbox'>
          <input
            value='womensClothing'
            type='radio'
            name='category'
            id='category_4'
          />
          <label htmlFor='category_4' className='h4 ml-1'>
            Women's Clothing
          </label>
        </div>
      </form>
      <form
        ref={filterRating}
        onChange={(evt) => {
          filterDispatch({ type: 'rating', payload: evt.target.value });
        }}
        className='filter__rating'
      >
        <h3 className='h3'>Rating</h3>

        <div className='rating__radio__input mt-1'>
          <input value='4' type='radio' name='rating' id='rating1' />
          <label htmlFor='rating1' className='ml-1 h4'>
            4 Stars & above
          </label>
        </div>
        <div className='rating__radio__input mt-1'>
          <input value='3' type='radio' name='rating' id='rating2' />
          <label htmlFor='rating2' className='ml-1 h4'>
            3 Stars & above
          </label>
        </div>
        <div className='rating__radio__input mt-1'>
          <input value='2' type='radio' name='rating' id='rating3' />
          <label htmlFor='rating3' className='ml-1 h4'>
            2 Stars & above
          </label>
        </div>
        <div className='rating__radio__input mt-1'>
          <input value='1' type='radio' name='rating' id='rating4' />
          <label htmlFor='rating4' className='ml-1 h4'>
            1 start & above
          </label>
        </div>
      </form>
      <form
        ref={filterSort}
        onChange={(evt) => {
          filterDispatch({ type: 'sortBy', payload: evt.target.value });
        }}
        className='filter__sort__by'
      >
        <h3 className='h3'>Sort by</h3>

        <div className='sort__radio__input mt-1'>
          <input
            value='Low to High'
            type='radio'
            name='sorting'
            id='sorting1'
          />
          <label htmlFor='sorting1' className='ml-1 h4'>
            Price - Low to High
          </label>
        </div>
        <div className='sorting__radio__input mt-1'>
          <input
            value='High to Low'
            type='radio'
            name='sorting'
            id='sorting2'
          />
          <label htmlFor='sorting2' className='ml-1 h4'>
            Price - High to Low
          </label>
        </div>
      </form>
    </>
  );
};

export { Filters };
