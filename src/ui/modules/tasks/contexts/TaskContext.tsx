import React, { createContext, useState} from 'react';
import { deleteTaskAction } from './utils/deleteTaskAction';
import { addTaskToListAction } from './utils/addTaskToListAction';
import { clearCompletedTasksAction } from './utils/clearCompletedTasksAction';
import { getTasksFilteredAction } from './utils/getTasksFilteredAction';

export type Task =  { 
  text: string, 
  active: boolean, 
  completed: boolean, 
  checked: boolean, 
  id: number
} 

type TaskContextProps = {
  filter: string,
  tasks: Task[],
  getTasksFiltered: () => Task[],
  addTaskToList: (text: string) =>  void,
  changeStatusTask: (task: Task) =>  void,
  clearCompletedTasks: () => void,
  filterChange: (text: string) =>  void,
  deleteTask: (task: Task) =>  void,
}

type TasksProviderProps = {
  children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>(undefined!);

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {

  const getInitialState = (): Task[] => {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks;
  };

  const [tasks, setTasks] = useState<Task[]>(getInitialState());
  const [filter, setFilter] = useState<string>('all');

  const saveTasksLocalstorage = (tasks: Task[]): void => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  const addTaskToList = (text: string) => {
    if(text !== "") {
      const newTasks = addTaskToListAction(tasks, text);
      setTasks(newTasks)
      saveTasksLocalstorage(newTasks)
    }
  }

  const changeStatusTask = (task: Task) => {
    // encontramos la posición de la tarea en el array
    const indexTask = tasks.findIndex(t =>  t.id === task.id );
    // esto no es una copia del array original es una referencia
    // const newTasks = tasks;

    // creamops la copia real del array
    const newTasks = [...tasks];

    // Modificamos la tarea concreta
    // newTasks[indexTask].active = !newTasks[indexTask].active;
    newTasks[indexTask]['active'] = !newTasks[indexTask]['active'];
    newTasks[indexTask]['completed'] = !newTasks[indexTask]['completed'];
    newTasks[indexTask]['checked'] = !newTasks[indexTask]['checked'];
    
    // seteamos el nuevo array
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }


  const clearCompletedTasks = () => {
    const newTasks = clearCompletedTasksAction(tasks);
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  const filterChange = (filter: string) => {
    setFilter(filter)
  }

  const getTasksFiltered = () => getTasksFilteredAction(tasks, filter);

  //   const tasksFiltered = getTasksFilteredAction(tasks, filter);
  // const getTasksFiltered = () => {
  //   const tasksFiltered = getTasksFilteredAction(tasks, filter);
  //   //console.log('tasksFiltered: ', tasksFiltered)
  //   // let tasksFiltered = tasks;
  //   // if (filter === 'active') {
  //   //   tasksFiltered = tasks.filter( task => task.active );
  //   // } else if (filter === 'completed') {
  //   //   tasksFiltered = tasks.filter( task => task.completed );
  //   // }

  //    return tasksFiltered
  // }

  const deleteTask = (taskToDelete: Task) => {
    const newTasks = deleteTaskAction(tasks, taskToDelete)
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        // tasks: tasks,
        tasks,
        filter,
        // getTasksFiltered: () => getTasksFilteredAction(tasks, filter),
        getTasksFiltered,
        addTaskToList,
        changeStatusTask,
        clearCompletedTasks,
        filterChange,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;