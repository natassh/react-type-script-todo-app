import React from 'react';
import PropTypes from 'prop-types';
import './TaskFilter.css';
function TaskFilter({ text, onChange , isActive }) {
  const handleClick = () => {
    onChange(text);
  }
  return  isActive ? (
    <strong className={isActive ? "actived" : ""}>
      {text}
    </strong>
    
  ): (
    <a href="#" onClick={handleClick}  >
      {text}
    </a>
  );
}

export default TaskFilter;

TaskFilter.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};