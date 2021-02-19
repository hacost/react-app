import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';

const Header = () => (
  <header className='item header'>
    <Link to='/'>
      <img className='header__logo' src={logo} alt='logo' />
    </Link>

  </header>
);

export default Header;
