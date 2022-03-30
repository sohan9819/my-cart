import testimonial from '../assets/images/testimonial.jpg';
import testimony_1 from '../assets/images/testimonial1.jpg';
import testimony_2 from '../assets/images/testimonial2.jpg';
import testimony_3 from '../assets/images/testimonial3.jpg';

import Swiper from 'swiper';

const Testimonials = () => {
  return (
    <section className='testimonial section  p-1'>
      <div className='testimonial__container grid'>
        <div className='testimonial__images m-auto'>
          <div className='testimonial__square'></div>
          <img
            src={testimonial}
            alt=''
            className='testimonial__img box-shadow'
          />
        </div>

        <div className='swiper testimonial-swiper'>
          <div className='swiper-wrapper'>
            <div className='testimonial__card swiper-slide'>
              <div className='testimonial__quote'>
                <i className='bx bxs-quote-alt-left h2'></i>
              </div>
              <p className='testimonial__description text-4'>
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h5 className='testimonial__date h5 color-orange'>
                March 27. 2021
              </h5>

              <div className='testimonial__perfil'>
                <img
                  src={testimony_1}
                  alt=''
                  className='testimonial__perfil-img'
                />

                <div className='testimonial__perfil-data'>
                  <span className='testimonial__perfil-name h3'>Lee Doe</span>
                  <span className='testimonial__perfil-detail h4'>
                    Director of a company
                  </span>
                </div>
              </div>
            </div>

            <div className='testimonial__card swiper-slide'>
              <div className='testimonial__quote'>
                <i className='bx bxs-quote-alt-left h2'></i>
              </div>
              <p className='testimonial__description text-4'>
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h5 className='testimonial__date h5 color-orange'>
                March 27. 2021
              </h5>

              <div className='testimonial__perfil'>
                <img
                  src={testimony_2}
                  alt=''
                  className='testimonial__perfil-img'
                />

                <div className='testimonial__perfil-data'>
                  <span className='testimonial__perfil-name h3'>
                    Samantha Mey
                  </span>
                  <span className='testimonial__perfil-detail h4'>
                    Director of a company
                  </span>
                </div>
              </div>
            </div>

            <div className='testimonial__card swiper-slide'>
              <div className='testimonial__quote'>
                <i className='bx bxs-quote-alt-left h2'></i>
              </div>
              <p className='testimonial__description text-4'>
                They are the best watches that one acquires, also they are
                always with the latest news and trends, with a very comfortable
                price and especially with the attention you receive, they are
                always attentive to your questions.
              </p>
              <h5 className='testimonial__date h5 color-orange'>
                March 27. 2021
              </h5>

              <div className='testimonial__perfil'>
                <img
                  src={testimony_3}
                  alt=''
                  className='testimonial__perfil-img'
                />

                <div className='testimonial__perfil-data'>
                  <span className='testimonial__perfil-name h3'>
                    Raul Zaman
                  </span>
                  <span className='testimonial__perfil-detail h4'>
                    Director of a company
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='swiper-button-next'>
            <i className='bx bx-right-arrow-alt h4'></i>
          </div>
          <div className='swiper-button-prev'>
            <i className='bx bx-left-arrow-alt h4'></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
