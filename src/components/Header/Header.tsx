import React from 'react';
import logo from '../../assets/logo.svg';
import Icon from '../../assets/login-icon';
import logoModal from '../../assets/logo-modal.svg';
import closeIcon from '../../assets/close-icon.svg';
import burgerIcon from '../../assets/burger-logo.svg';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

import './Header.scss';
import '../../scss/variables.scss';

const useStyles = makeStyles({
  paper: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  floatingLabelFocusStyle: {
    transform: 'translate(0, -20px) scale(1)',
    color: '#394959',
    fontSize: '16px',
    fontFamily: 'Roboto-Regular',
    fontWeight: 'normal',
  },
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      transition: '250ms',
      borderColor: '#1F1E25',
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2C36F2',
    },
  },
});

export const Header: React.FC = () => {
  const [burgerVisibility, setBurgerVisibility] = React.useState(false);
  const [loginVisibility, setLoginVisibility] = React.useState(false);

  const styles = useStyles();

  const burgerMenu = () => {
    setBurgerVisibility(!burgerVisibility);
  };

  const loginOpen = () => {
    setLoginVisibility(!loginVisibility);
  };
  return (
    <header className="header">
      <div className="nav__sm-controller" onClick={burgerMenu}>
        <img src={burgerIcon} alt="burger-menu" />
      </div>

      <img src={logo} className="header__logo" alt="header-logo" />

      <nav className="nav">
        <Drawer
          open={burgerVisibility}
          classes={{ paper: styles.paper }}
          onClose={burgerMenu}
        >
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
        </Drawer>

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

      <div className="login" onClick={loginOpen}>
        <Icon fill="#1F1E25" />
        <span className="login__text">Войти в Интернет-банк</span>
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
          <div className="login-paper">
            <div className="modal-nav">
              <img src={logoModal} alt="Modal-company-logo" />
              <img src={closeIcon} alt="Close-modal-icon" onClick={loginOpen} />
            </div>
            <TextField
              id="outlined-secondary"
              label="Логин"
              variant="outlined"
              fullWidth
              style={{ marginBottom: 50 }}
              className={styles.root}
              InputLabelProps={{
                className: styles.floatingLabelFocusStyle,
              }}
            />
            <TextField
              id="outlined-secondary"
              label="Пароль"
              variant="outlined"
              fullWidth
              className={styles.root}
              style={{ marginBottom: 10 }}
              InputLabelProps={{
                className: styles.floatingLabelFocusStyle,
              }}
            />
            <span className="login-paper__forgot-password">Забыли пароль?</span>
            <button className="button login-paper__button" >
              Войти
            </button>
          </div>
        </Fade>
      </Modal>
    </header>
  );
};
