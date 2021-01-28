import React from 'react';
import './TaskFilter.css';

const TaskFilter: React.FC<TaskFilterProps> = ({ text, onChange , isActive }) => {

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

type TaskFilterProps = {
  text: string,
  isActive: boolean,
  onChange: (value: string) => void
}
