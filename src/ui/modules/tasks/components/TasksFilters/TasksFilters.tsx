import React, {useContext} from 'react';
import TaskFilter from '../TaskFilter';
import { TaskContext } from '../../contexts/TaskContext';
import './TasksFilters.css';

const filters = ["all", "active", "completed"]

const TasksFilters = () => {
  const { filterChange, filter } = useContext(TaskContext);
  /****** 
  OPCION 1 -> 
  1. Traigo del contexto el filtro pulsado 
  2. Hago la comparación directamente en el className del Componente
  *******/
  const pulsedFilter = filter

  /****** 
  OPCION 2 -> 
  1. Creo un estado: const [pulsedFilter, setPulsedFilter] = useState("all")
  2. En el handleFilterChange seteo el estado con el valor de filter (el item de filters)
  3. Hago la comparación directamente en el className del Componente
  *******/
 //const [pulsedFilter, setPulsedFilter] = useState("all")

  const handleFilterChange = (filter: string) => {
    filterChange(filter);
    //setPulsedFilter(filter)
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