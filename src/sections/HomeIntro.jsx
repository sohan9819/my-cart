import { Link } from 'react-router-dom';

const HomeIntro = () => {
  return (
    <section className='home mb-2 container mx-auto' id='home'>
      <div className='home__container container grid relative gap-2'>
        <div className='home__img-bg'>
          <img
            src='./assets/images/pngwing.com.png'
            alt=''
            className='home__img'
          />
        </div>

        <div className='home__social flex gap-2 absolute'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            className='home__social-link h5 uppercase'
          >
            Facebook
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            className='home__social-link h5 uppercase'
          >
            Twitter
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            className='home__social-link h5 uppercase'
          >
            Instagram
          </a>
        </div>

        <div className='home__data'>
          <h2 className='home__title h2'>
            BIG DEALS <br />
            ON TOP BRANDS
          </h2>
          <p className='home__description text-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem
          </p>

          <div className='home__btns'>
            <Link to='/products' className='btn__link btn--medium p-2 h3'>
              Discover &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeIntro };
