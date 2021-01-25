import React from 'react';
import PropTypes from 'prop-types';
import './MainTitle.css';

const MainTitle = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
);

export default MainTitle;

MainTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
