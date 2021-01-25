import React, { useState, useContext } from 'react';
import Input from '../../../../components/Input';
import { TaskContext } from '../../contexts/TaskContext';

import './AddTaskForm.css';

const AddTaskForm = () => {
  // Guardaremos el dato del input en el estado local para trabajar con el en el submit
  const [valueInput, setValueInput] = useState('');
  // Uso el contexto global
  const { addTaskToList } = useContext(TaskContext);

  // Control del change input
  const handleWhenValueInputChange = inputNewValue => {
    setValueInput(inputNewValue);
  };

  // Control del submit: donde llamo la función addTaskToList pasandole el valor del input
  const handleSubmit = e => {
    e.preventDefault();
    addTaskToList(valueInput);
    setValueInput('');
  };

  return (
    <form className="AddTaskForm" onSubmit={handleSubmit}>
      <Input 
        onChange={handleWhenValueInputChange} 
        className="AddTaskForm__Input"
        type="text"
        value={valueInput}
        placeholder = "Create a new todo..."
       />
       <button type="submit" className="AddTaskForm__Button-submit"/>
    </form>
  );
};

export default AddTaskForm;
