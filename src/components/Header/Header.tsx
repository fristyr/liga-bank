import React, { useState, FormEvent } from 'react';
import { Drawer } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import logo from '../../assets/logo.svg';
import Icon from '../../assets/login-icon';
import logoModal from '../../assets/logo-modal.svg';
import closeIcon from '../../assets/close-icon.svg';
import burgerIcon from '../../assets/burger-logo.svg';
import { Input } from '../Form/Input';
import { publicSrc } from '../../constants/publicSource';

import './Header.scss';
import '../../scss/variables.scss';

export const Header: React.FC = () => {
  const [burgerVisibility, setBurgerVisibility] = useState(false);
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    typePassword: true,
  });

  const burgerMenu = () => {
    setBurgerVisibility(!burgerVisibility);
  };

  const loginOpen = () => {
    setLoginVisibility(!loginVisibility);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { username, password } = credentials;
    localStorage.setItem(
      'User-login-data',
      JSON.stringify({ username, password })
    );
  };

  return (
    <header className="header">
      <button type="button" className="nav__sm-controller" onClick={burgerMenu}>
        <img src={burgerIcon} alt="burger-menu" />
      </button>

      <img src={logo} className="header__logo" alt="header-logo" />

      <nav className="nav">
        <Drawer open={burgerVisibility} onClose={burgerMenu}>
          <a href="#offers" className="nav__link" onClick={burgerMenu}>
            Услуги
          </a>
          <a href="#calculator" className="nav__link" onClick={burgerMenu}>
            Рассчитать кредит
          </a>
          <a href="#bank-branches" className="nav__link" onClick={burgerMenu}>
            Контакты
          </a>
          <a href="#footer" className="nav__link" onClick={burgerMenu}>
            Задать вопрос
          </a>
        </Drawer>

        <div className="nav__lg">
          <a href="#offers" className="nav__link">
            Услуги
          </a>
          <a href="#calculator" className="nav__link">
            Рассчитать кредит
          </a>
          <a href="#bank-branches" className="nav__link">
            Контакты
          </a>
          <a href="#footer" className="nav__link">
            Задать вопрос
          </a>
        </div>
      </nav>

      <button type="button" className="login" onClick={loginOpen}>
        <Icon fill="#1F1E25" />
        <span className="login__text">Войти в Интернет-банк</span>
      </button>

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
                <img src={logoModal} alt="Modal-company-logo" />
                <button type="button" onClick={loginOpen}>
                  <img src={closeIcon} alt="Close-modal-icon" />
                </button>
              </div>
              <div className="login-input">
                <span className="login-input__name">Логин</span>
                <Input
                  inputClassName="login-input__element-1"
                  autoFocus={true}
                  onInputChange={(e: string) => {
                    setCredentials({ ...credentials, username: e });
                  }}
                />
              </div>
              <div className="login-input">
                <span className="login-input__name">Пароль</span>
                <Input
                  inputClassName="login-input__element-2"
                  inputType={credentials.typePassword ? 'password' : 'text'}
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
                Забыли пароль?
              </span>
              <button type="submit" className="button login-paper__button">
                Войти
              </button>
            </div>
          </form>
        </Fade>
      </Modal>
    </header>
  );
};
