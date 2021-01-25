import React, {useContext} from 'react';
import TasksFilters from '../TasksFilters';
import { TaskContext } from '../../contexts/TaskContext';
import './TasksMenu.css';

const TasksMenu = () => {
  const { getTasksFiltered, clearCompletedTasks } = useContext(TaskContext);

  const tasks = getTasksFiltered();

  const handleClearCompleted = () => {
    clearCompletedTasks();
  }

  return (
    <>
    <aside className="TasksMenu">
      <p>{tasks.length} items</p>
      <TasksFilters />

      <a 
        href="#" 
        className="TasksMenu__ClearCompleted"
        onClick={handleClearCompleted}  
      >
        Clear Completed
      </a>
    </aside>

    <aside className="TasksResponsiveMenu">
      <TasksFilters />
    </aside>
    </>
  );
};

export default TasksMenu;