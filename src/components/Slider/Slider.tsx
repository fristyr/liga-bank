import React from 'react';
import Swiper from 'react-id-swiper';
import './Slider.scss';
import images from './images';

export const Slider: React.FC = () => {
  const params = {
    centeredSlides: true,
    /* loop: true, */
    /*     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }, */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      {images.map(
        ({
          id,
          description,
          buttonText,
          buttonLink,
          imgDesktopWebp,
          imgDesktopJpg,
          imgTabletWebp,
          imgTabletJpg,
          imgMobileWebp,
          imgMobileJpg,
        }) => (
          <section className="slider__item" key={id}>
            <div className={`slide-info slide-info--${id}`}>
              <h1 className="slide-info__title">Лига Банк</h1>
              <p
                className={`slide-info__description slide-info__description--${id}`}
              >
                {description}
              </p>
              {buttonText && (
                <a
                  href={buttonLink}
                  className={`button button--light slide-info__button--${id}`}
                >
                  {buttonText}
                </a>
              )}
            </div>
            <picture>
              <source
                media="(min-width: 1024px)"
                type="image/webp"
                srcSet={`${process.env.PUBLIC_URL}${imgDesktopWebp}`}
              />
              <source
                media="(min-width: 1024px)"
                type="image/jpg"
                srcSet={`${process.env.PUBLIC_URL}${imgDesktopJpg}`}
              />

              <source
                media="(min-width: 768px)"
                type="image/webp"
                srcSet={`${process.env.PUBLIC_URL}${imgTabletWebp}`}
              />
              <source
                media="(min-width: 768px)"
                type="image/jpg"
                srcSet={`${process.env.PUBLIC_URL}${imgTabletJpg}`}
              />

              <source
                media="(min-width: 100px)"
                type="image/webp"
                srcSet={`${process.env.PUBLIC_URL}${imgMobileWebp}`}
              />
              <source
                media="(min-width: 100px)"
                type="image/jpg"
                srcSet={`${process.env.PUBLIC_URL}${imgMobileJpg}`}
              />

              <img
                src={`${process.env.PUBLIC_URL}${imgDesktopJpg}`}
                alt={`slider${id}`}
                className="slider__item--img"
              />
            </picture>
          </section>
        )
      )}
    </Swiper>
  );
};
