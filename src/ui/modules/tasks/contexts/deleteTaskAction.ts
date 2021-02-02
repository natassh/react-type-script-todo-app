import { Task } from './TaskContext';

const deleteTaskAction = (tasks: Task[], taskToDelete:Task): Task[] => {
    const newTasks = tasks.filter(
        task => task.id !== taskToDelete.id
      );
    return newTasks;
}

export { deleteTaskAction }