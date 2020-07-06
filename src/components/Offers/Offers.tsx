import React, { FC, useRef, useState, useEffect } from 'react';
import Swiper, { SwiperRefNode } from 'react-id-swiper';

import offersList from './offersList';
import classNames from 'classnames';
import './Offers.scss';

export const Offers: FC = () => {
  const swiperRef = useRef<SwiperRefNode>(null);
  const [slideIndex, setSlideIndex] = useState();

  const params = {
    pagination: {
      el: '.swiper-pagination.swiper-offer-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        allowTouchMove: false,
      },
      300: {
        allowTouchMove: true,
      },
    },
    /* autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }, */
  };
  const goToSlide = (id: Number) => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slideTo(id);
      console.log(swiperRef.current.swiper);
      setSlideIndex(swiperRef.current.swiper);
    }
  };

  useEffect(() => {
    setSlideIndex(swiperRef.current?.swiper.realIndex);
  }, [slideIndex]);

  return (
    <section className="offers">
      <div className="offers-nav">
        {offersList.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(item.id)}
            className={classNames('button offers-nav__button', {
              'offers-nav__button--active': slideIndex === index,
            })}
          >
            <img
              className="offers-nav__product-icon"
              src={process.env.PUBLIC_URL + `${item.itemButtonIcon}`}
              alt="tab-icon"
            />
            {item.itemButton}
          </button>
        ))}
      </div>
      <div className="offers-content">
        <Swiper {...params} ref={swiperRef}>
          {offersList.map(
            ({
              id,
              title,
              __html,
              descriptionList,
              buttonLink,
              imgDesktopWebp,
              imgDesktopJpg,
              imgTabletWebp,
              imgTabletJpg,
              imgMobileWebp,
              imgMobileJpg,
            }) => (
              <article key={id}>
                <div className="offer">
                  <div className={`description description--${id}`}>
                    <h2 className={`description__title description__title--${id}`}>{title}</h2>
                    <ul className={`description__list description__list--${id}`}>
                      {descriptionList.map((item, index) => (
                        <li key={index} className="description__text" >
                          <img className="description__icon" src={process.env.PUBLIC_URL + '/assets/checkmark.svg' } alt="checkmark"/>
                          <span dangerouslySetInnerHTML={{ __html: `${item}` }} ></span>
                        </li>
                      ))}
                    </ul>
                    {buttonLink && <a href={buttonLink} className="button description__button" >Узнать подробнее</a>}
                    {__html && <p className="description__aditional" dangerouslySetInnerHTML={{__html}} ></p>}
                  </div>
                  <div className="offer__wrapper-img ">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        type="image/webp"
                        srcSet={process.env.PUBLIC_URL + `${imgDesktopWebp}`}
                      />
                      <source
                        media="(min-width: 1024px)"
                        type="image/jpg"
                        srcSet={process.env.PUBLIC_URL + `${imgDesktopJpg}`}
                      />

                      <source
                        media="(min-width: 768px)"
                        type="image/webp"
                        srcSet={process.env.PUBLIC_URL + `${imgTabletWebp}`}
                      />
                      <source
                        media="(min-width: 768px)"
                        type="image/jpg"
                        srcSet={process.env.PUBLIC_URL + `${imgTabletJpg}`}
                      />

                      <source
                        media="(min-width: 100px)"
                        type="image/webp"
                        srcSet={process.env.PUBLIC_URL + `${imgMobileWebp}`}
                      />
                      <source
                        media="(min-width: 100px)"
                        type="image/jpg"
                        srcSet={process.env.PUBLIC_URL + `${imgMobileJpg}`}
                      />

                      <img
                        src={process.env.PUBLIC_URL + `${imgDesktopWebp}`}
                        alt={`slider${id}`}
                        className="offer-img"
                      />
                    </picture>
                  </div>
                </div>
              </article>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};
