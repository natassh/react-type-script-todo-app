import { Task } from '../TaskContext';

const clearCompletedTasksAction = (tasks: Task[]): Task[] => {
  const newTasks = tasks.filter(
    task => task.completed === false
  )
    return newTasks;
}

export { clearCompletedTasksAction }
