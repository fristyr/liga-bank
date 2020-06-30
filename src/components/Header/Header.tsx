import React from 'react';
import logo from '../../assets/logo.svg';
import Icon from '../../assets/login-icon';
import burgerIcon from '../../assets/burger-logo.svg';
import './Header.scss';
import '../../scss/variables.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="nav__sm">
        <img src={burgerIcon} alt="burger-menu" />
      </div>
      <img src={logo} className="header__logo" alt="header-logo" />
      <nav className="nav">
        <div className="nav__lg">
          <a href="/test" className="nav__link">
            Услуги
          </a>
          <a href="/test" className="nav__link">
            Рассчитать кредит
          </a>
          <a href="/test" className="nav__link">
            Контакты
          </a>
          <a href="/test" className="nav__link">
            Задать вопрос
          </a>
        </div>
      </nav>

      <div className="login">
        <Icon fill="#1F1E25" />
        <span className="login__text">Войти в Интернет-банк</span>
      </div>
    </header>
  );
};
