import React, {useContext} from 'react';
import TaskFilter from '../TaskFilter';
import { TaskContext } from '../../contexts/TaskContext';
import './TasksFilters.css';

const filters = ["all", "active", "completed"]

const TasksFilters = () => {
  const { filterChange, filter } = useContext(TaskContext);
  const pulsedFilter = filter

  const handleFilterChange = (filter: string) => {
    filterChange(filter);
  }

  return (
    <ul className="TasksFilters">
      {filters.map(f => {
        const id = f.length + 1
        return(
          <li key={id}>
             <TaskFilter 
             text={f} 
             onChange={handleFilterChange}
             isActive={pulsedFilter === f}
             />
          </li>
        )
      })}
    </ul>
  );
};

export default TasksFilters;