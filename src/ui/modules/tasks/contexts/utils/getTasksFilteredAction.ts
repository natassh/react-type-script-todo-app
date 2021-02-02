import { Task } from '../TaskContext';

const getTasksFilteredAction = (tasks: Task[], filter: string): Task[] => {
  let tasksFiltered = tasks;
  if (filter === 'active') {
    tasksFiltered = tasks.filter( task => task.active );
  } else if (filter === 'completed') {
    tasksFiltered = tasks.filter( task => task.completed );
  }

  return tasksFiltered  
}

export { getTasksFilteredAction }


