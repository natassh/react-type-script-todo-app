import React from 'react';
import './Input.css';

const Input: React.FC<InputProps> = ({ onChange, className, type, value, placeholder }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
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


type InputProps = {
  className: string,
  type: string,
  value?: string,
  placeholder?: string,
  onChange: (value: string) => void
}