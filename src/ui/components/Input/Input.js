import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ onChange, className, type, value, placeholder }) => {

  const handleChange = e => {
    const inputNewValue = e.target.value;
    onChange(inputNewValue);
  };

  return (
    <input
      className={className} 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
};