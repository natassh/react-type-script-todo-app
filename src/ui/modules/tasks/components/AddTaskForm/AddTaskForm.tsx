import React, { useState, useContext } from 'react';
import Input from '../../../../components/Input';
import { TaskContext } from '../../contexts/TaskContext';

import './AddTaskForm.css';

const AddTaskForm: React.FC = () => {
  const [valueInput, setValueInput] = useState<string>('');
  const { addTaskToList } = useContext(TaskContext);

  const handleWhenValueInputChange = (inputNewValue:string) => {
    setValueInput(inputNewValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTaskToList(valueInput);
    setValueInput('');
  };

  return (
    <form className="AddTaskForm" onSubmit={handleSubmit}>
      <Input
        title="Create a new todo"
        onChange={handleWhenValueInputChange} 
        className="AddTaskForm__Input"
        type="text"
        value={valueInput}
        placeholder = "Create a new todo..."
       />
       <button type="submit" className="AddTaskForm__Button-submit" title="Submit"/>
    </form>
  );
};

export default AddTaskForm;
