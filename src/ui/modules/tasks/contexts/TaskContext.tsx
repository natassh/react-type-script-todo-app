import React, { createContext, useState} from 'react';
import { deleteTaskAction } from './utils/deleteTaskAction';
import { addTaskToListAction } from './utils/addTaskToListAction';
import { clearCompletedTasksAction } from './utils/clearCompletedTasksAction';
import { getTasksFilteredAction } from './utils/getTasksFilteredAction';
import {getInitialState} from './getInitialState'

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
    const indexTask = tasks.findIndex(t =>  t.id === task.id );

    const newTasks = [...tasks];

    newTasks[indexTask]['active'] = !newTasks[indexTask]['active'];
    newTasks[indexTask]['completed'] = !newTasks[indexTask]['completed'];
    newTasks[indexTask]['checked'] = !newTasks[indexTask]['checked'];
    
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


  const deleteTask = (taskToDelete: Task) => {
    const newTasks = deleteTaskAction(tasks, taskToDelete)
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
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