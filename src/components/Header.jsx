import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/your-logo.png';
import CartTranslate from '../../i18n';

const Header = () => (
  <header className='item header'>
    <img className='header__logo' src={logo} alt='your logo' />
    <h1>{CartTranslate.t('signup')}</h1>
  </header>
);

export default Header;
