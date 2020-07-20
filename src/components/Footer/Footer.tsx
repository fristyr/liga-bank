import React, { FC } from 'react';
import logo from '../../assets/logo.svg';
import './Footer.scss';
import { publicSrc } from '../../constants/publicSource';

export const Footer: FC = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__left">
        <div className="location">
          <img src={logo} alt="Logo-icon" className="location__company-logo" />
          <p className="location__name location__name--big">
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
            России №1050 Ⓒ Лига Банк, 2019
          </p>
        </div>

        <div className="footer-offers">
          <a href="#offers" className="footer-offers__link">
            Услуги
          </a>
          <a href="#calculator" className="footer-offers__link">
            Рассчитать кредит
          </a>
          <a href="#bank-branches" className="footer-offers__link">
            Контакты
          </a>
          <a href="#offers" className="footer-offers__link">
            Задать вопрос
          </a>
        </div>
        <p className="location__name location__name--small">
          150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
          России №1050 Ⓒ Лига Банк, 2019
        </p>
      </div>

      <div className="footer__right">
        <div className="phone phone--mobile">
          <p className="phone__numb">
            <img
              src={`${publicSrc}/assets/footer/phone.svg`}
              alt="Phone-numb-icon"
            />
            *0904
          </p>
          <p className="phone__text">
            Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
          </p>
        </div>

        <div className="phone phone--fix">
          <p className="phone__numb">
            <img
              src={`${publicSrc}/assets/footer/fix-phone.svg`}
              alt="Phone-numb-icon"
            />
            8 800 111 22 33
          </p>
          <p className="phone__text">Бесплатный для всех городов России</p>
        </div>

        <div className="socials">
          <img
            className="socials__icon"
            src={`${publicSrc}/assets/footer/fb-icon.svg`}
            alt="fb"
          />
          <img
            className="socials__icon"
            src={`${publicSrc}/assets/footer/insta.svg`}
            alt="inst"
          />
          <img
            className="socials__icon"
            src={`${publicSrc}/assets/footer/twitt.svg`}
            alt="twitt"
          />
          <img
            className="socials__icon"
            src={`${publicSrc}/assets/footer/youtube.svg`}
            alt="yout"
          />
        </div>
      </div>
    </footer>
  );
};
