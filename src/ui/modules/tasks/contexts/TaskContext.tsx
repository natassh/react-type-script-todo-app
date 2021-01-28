import React, { createContext, useState} from 'react';

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
  //addTaskToList: (param: string) =>  void,
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
      const newTasks = [...tasks, { text : text, active: true, completed: false, checked: false, id: new Date().getTime() }];
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
    const newTasks = tasks.filter(
      task => task.completed === false
    )
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  const filterChange = (filter: string) => {
    setFilter(filter)
  }

  const getTasksFiltered = () => {
    let tasksFiltered = tasks;
    if (filter === 'active') {
      tasksFiltered = tasks.filter( task => task.active );
    } else if (filter === 'completed') {
      tasksFiltered = tasks.filter( task => task.completed );
    }

    return tasksFiltered
  }

  const deleteTask = (taskToDelete: Task) => {
    console.log('taskToDelete: ', taskToDelete)
    const newTasks = tasks.filter(
      task => task.id !== taskToDelete.id
    );
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