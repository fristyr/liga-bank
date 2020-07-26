import React, { FC } from 'react';
import './Footer.scss';
import { publicSrc } from '../../constants/publicSource';
import { useTranslation } from 'react-i18next';

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="footer__left">
        <div className="location">
          <img src={`${publicSrc}/assets/logo/${t('logo')}.svg`} alt="Logo-icon" className="location__company-logo" />
          <p className="location__name location__name--big">
            {t('footer.location')}
          </p>
        </div>

        <div className="footer-offers">
          <a href="#offers" className="footer-offers__link">
            {t('offerNames.offerNameOne')}
          </a>
          <a href="#calculator" className="footer-offers__link">
            {t('offerNames.offerNameTwo')}
          </a>
          <a href="#bank-branches" className="footer-offers__link">
            {t('offerNames.offerNameThree')}
          </a>
          <a href="#offers" className="footer-offers__link">
            {t('offerNames.offerNameFour')}
          </a>
        </div>
        <p className="location__name location__name--small">
          {t('footer.location')}
        </p>
      </div>

      <div className="footer__right">
        <div className="phone phone--mobile">
          <a href="tel:0904" className="phone__numb">
            <img
              src={`${publicSrc}/assets/footer/phone.svg`}
              alt="Phone-numb-icon"
            />
            *0904
          </a>
          <p className="phone__text">{t('footer.phoneText')}</p>
        </div>

        <div className="phone phone--fix">
          <a href="tel:8-800-111-22-33" className="phone__numb">
            <img
              src={`${publicSrc}/assets/footer/fix-phone.svg`}
              alt="Phone-numb-icon"
            />
            8 800 111 22 33
          </a>
          <p className="phone__text">{t('footer.phoneDescription')}</p>
        </div>

        <div className="socials">
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="socials__icon"
              src={`${publicSrc}/assets/footer/fb-icon.svg`}
              alt="fb"
            />
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="socials__icon"
              src={`${publicSrc}/assets/footer/insta.svg`}
              alt="inst"
            />
          </a>
          <a
            href="https://twitter.com/explore"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="socials__icon"
              src={`${publicSrc}/assets/footer/twitt.svg`}
              alt="twitt"
            />
          </a>
          <a
            href="https://www.youtube.com/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="socials__icon"
              src={`${publicSrc}/assets/footer/youtube.svg`}
              alt="yout"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
