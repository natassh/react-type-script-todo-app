import { Task } from '../TaskContext';

const addTaskToListAction = (tasks: Task[], text: string): Task[] => {
  const newTasks = [...tasks, { text : text, active: true, completed: false, checked: false, id: new Date().getTime() }];
    return newTasks;
}

export { addTaskToListAction }