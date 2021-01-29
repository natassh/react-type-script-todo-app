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
    <nav className="TasksMenu">
      <ul>
        <li>
          {tasks.length} items
        </li>
        <li>
          <TasksFilters />
        </li>
        <li>
          <a 
            href="#" 
            className="TasksMenu__ClearCompleted"
            onClick={handleClearCompleted}  
          >
            Clear Completed
          </a>
        </li>
      </ul>

    </nav>

    <nav className="TasksResponsiveMenu">
      <TasksFilters />
    </nav>
    </>
  );
};

export default TasksMenu;