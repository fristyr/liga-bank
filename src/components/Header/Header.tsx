import React, { useState, FormEvent, useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import CustomSelect from 'react-select';
import { ValueType } from 'react-select/src/types';
import classNames from 'classnames';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Icon from '../../assets/login-icon';
import closeIcon from '../../assets/close-icon.svg';
import burgerIcon from '../../assets/burger-logo.svg';
import { Input } from '../Form/Input';
import { publicSrc } from '../../constants/publicSource';
import { customStyles } from './styles';

import './Header.scss';
import '../../scss/variables.scss';

export const Header: React.FC = () => {
  type OptionType = { label: string; value: string };

  const [burgerVisibility, setBurgerVisibility] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    typePassword: true,
  });
  const [submitButtonState, setSubmitButtonState] = useState(true);
  const { username, password } = credentials;

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (username.length && password.length >= 5) {
      setSubmitButtonState(false);
    } else {
      setSubmitButtonState(true);
    }
  }, [username, password]);

  const burgerMenu = () => {
    setBurgerVisibility(!burgerVisibility);
  };

  const loginOpen = () => {
    setLoginVisibility(!loginVisibility);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setCredentials({ ...credentials, username: '', password: '' });
    localStorage.setItem(
      'User-login-data',
      JSON.stringify({ username, password })
    );
  };

  const dataValues = [
    { label: 'En', value: 'en' },
    { label: 'Ru', value: 'ru' },
  ];

  return (
    <header className="header">
      <button type="button" className="nav__sm-controller" onClick={burgerMenu}>
        <img src={burgerIcon} alt="burger-menu" />
      </button>

      <img
        src={`${publicSrc}/assets/logo/${t('logo')}.svg`}
        className="header__logo"
        alt="header-logo"
      />
      <nav className="nav">
        <Drawer open={burgerVisibility} onClose={burgerMenu}>
          <a href="#offers" className="nav__link" onClick={burgerMenu}>
            {t('offerNames.offerNameOne')}
          </a>
          <a href="#calculator" className="nav__link" onClick={burgerMenu}>
            {t('offerNames.offerNameTwo')}
          </a>
          <a href="#bank-branches" className="nav__link" onClick={burgerMenu}>
            {t('offerNames.offerNameThree')}
          </a>
          <a href="#footer" className="nav__link" onClick={burgerMenu}>
            {t('offerNames.offerNameFour')}
          </a>
        </Drawer>

        <div className="nav__lg">
          <a href="#offers" className="nav__link">
            {t('offerNames.offerNameOne')}
          </a>
          <a href="#calculator" className="nav__link">
            {t('offerNames.offerNameTwo')}
          </a>
          <a href="#bank-branches" className="nav__link">
            {t('offerNames.offerNameThree')}
          </a>
          <a href="#footer" className="nav__link">
            {t('offerNames.offerNameFour')}
          </a>
        </div>
      </nav>

      <div className="login">
        <button type="button" className="login__button" onClick={loginOpen}>
          <Icon fill="#1F1E25" />
          <span className="login__text">{t('login.title')}</span>
        </button>
        <div>
          <CustomSelect
            options={dataValues}
            isMulti={false}
            onChange={(selectedLang: ValueType<OptionType>) => {
              const onChange = selectedLang as OptionType;
              i18n.changeLanguage(onChange.value);
            }}
            styles={customStyles}
            placeholder="En"
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: (state) => (
                <div
                  className={classNames('menu__select', {
                    'menu__select--open': state.selectProps.menuIsOpen,
                  })}
                >
                  <img src={`${publicSrc}/assets/chevron.svg`} alt="Arrow" />
                </div>
              ),
            }}
          />
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="login__modal"
        open={loginVisibility}
        onClose={loginOpen}
        closeAfterTransition
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={loginVisibility}>
          <form onSubmit={handleSubmit}>
            <div className="login-paper">
              <div className="modal-nav">
                <img
                  src={`${publicSrc}/assets/logo/${t('logoModal')}.svg`}
                  alt="Modal-company-logo"
                />
                <button type="button" onClick={loginOpen}>
                  <img src={closeIcon} alt="Close-modal-icon" />
                </button>
              </div>
              <div className="login-input">
                <span className="login-input__name">
                  {t('login.inputName')}
                </span>
                <Input
                  inputClassName="login-input__element-1"
                  autoFocus={true}
                  inputValue={credentials.username}
                  onInputChange={(e: string) => {
                    setCredentials({ ...credentials, username: e });
                  }}
                />
              </div>
              <div className="login-input">
                <span className="login-input__name">
                  {t('login.inputPassword')}
                </span>
                <Input
                  inputClassName="login-input__element-2"
                  inputType={credentials.typePassword ? 'password' : 'text'}
                  inputValue={credentials.password}
                  onInputChange={(e: string) => {
                    setCredentials({ ...credentials, password: e });
                  }}
                />
                <button
                  type="button"
                  className="login-input__icon"
                  onClick={() => {
                    setCredentials({
                      ...credentials,
                      typePassword: !credentials.typePassword,
                    });
                  }}
                >
                  <img
                    src={`${publicSrc}/assets/password-icon.svg`}
                    alt="Password-icon"
                  />
                </button>
              </div>
              <span className="login-paper__forgot-password">
                {t('login.forgotPassword')}
              </span>
              <button
                type="submit"
                className={classNames('button login-paper__button', {
                  'button--disabled': submitButtonState,
                })}
              >
                {t('login.button')}
              </button>
            </div>
          </form>
        </Fade>
      </Modal>
    </header>
  );
};
