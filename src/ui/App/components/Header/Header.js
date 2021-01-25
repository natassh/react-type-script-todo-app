import React from 'react';
import PropTypes from 'prop-types';

import MainTitle from '../MainTitle';
import LightDarkMode from '../../../components/LightDarkMode';
import './Header.css';

function Header({ className }) {
  return (
    <header className={className}>
      <div className="cw">
        <MainTitle className="MainTitle">
          TODO
        </MainTitle>
        <LightDarkMode/>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  className: PropTypes.string
};
