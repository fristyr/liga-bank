import React from 'react';
import Swiper from 'react-id-swiper';
import './Slider.scss';
import images from './images';
import { publicSrc } from '../../constants/publicSource';

export const Slider: React.FC = () => {
  const params = {
    centeredSlides: true,
    /* loop: true, */
    /*     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }, */
    pagination: {
      el: '.swiper-pagination.swiper-main-slides',
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
                srcSet={`${publicSrc}${imgDesktopWebp}`}
              />
              <source
                media="(min-width: 1024px)"
                type="image/jpg"
                srcSet={`${publicSrc}${imgDesktopJpg}`}
              />

              <source
                media="(min-width: 768px)"
                type="image/webp"
                srcSet={`${publicSrc}${imgTabletWebp}`}
              />
              <source
                media="(min-width: 768px)"
                type="image/jpg"
                srcSet={`${publicSrc}${imgTabletJpg}`}
              />

              <source
                media="(min-width: 100px)"
                type="image/webp"
                srcSet={`${publicSrc}${imgMobileWebp}`}
              />
              <source
                media="(min-width: 100px)"
                type="image/jpg"
                srcSet={`${publicSrc}${imgMobileJpg}`}
              />

              <img
                src={`${publicSrc}${imgDesktopJpg}`}
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
