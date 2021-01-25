import React, { createContext, useState} from 'react';
export const TaskContext = createContext();

const TasksProvider = props => {
  const getInitialState = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks;
  };

  const [tasks, setTasks] = useState(getInitialState());
  const [filter, setFilter] = useState('all');
console.log('tasks: ', tasks)
  const saveTasksLocalstorage = tasks => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  const addTaskToList = task => {
    if(task !== "") {
      const newTasks = [...tasks, { text : task, active: true, completed: false, checked: false, id: new Date().getTime() }];
      setTasks(newTasks)
      saveTasksLocalstorage(newTasks)
    }
  }

  const changeStatusTask = (task) => {
    // encontramos la posición de la tarea en el array
    const indexTask = tasks.findIndex(t => t.id === task.id );
    // esto no es una copia del array original es una referencia
    // const newTasks = tasks;

    // creamops la copia real del array
    const newTasks = [...tasks];

    // Modificamos la tarea concreta
    newTasks[indexTask]['active'] = !newTasks[indexTask]['active'];
    newTasks[indexTask]['completed'] = !newTasks[indexTask]['completed'];
    newTasks[indexTask]['checked'] = !newTasks[indexTask]['checked'];
    
    // seteamos el nuevo array
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  /* Problema de esta solucion, que mutamos el array original */
  /* pero mejora rendimiento al no hacer un bucle */
  const changeStatusTask__refactor3 = (task) => {
    const indexTask = tasks.findIndex(t => t.id === task.id );

    tasks[indexTask]['active'] = !tasks[indexTask]['active'];
    tasks[indexTask]['completed'] = !tasks[indexTask]['completed'];
    
    setTasks(tasks);
    saveTasksLocalstorage(tasks);
  }

  /* problema de esta solucion ? */
  /* tienes que recorrer todo el array para modificar un elemento., si tengo 1000 elemenotos.... */
  /* lento */ 
  const changeStatusTask_refactor2 = (task) => {
    const newTasks = tasks.map( t => {
      if(t.id === task.id) {
        t.active = !t.active;
        t.completed = !t.completed;
      }
      return t;
    })
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  const changeStatusTask_refactor_1 = (task, status) => {
    const newTasks = tasks.map( t => {
      if(t.id === task.id) {
        if(status === true) {
          t.active = false;
          t.completed = true;
        } else {
          t.active = true;
          t.completed = false;
        }
      }
      return t;
    })
    setTasks(newTasks);
    saveTasksLocalstorage(newTasks);
  }

  const changeStatusTask3 = (task, status) => {
    const newTasks = tasks.map( t => {
      if(t.id === task.id) {
        let completedTask = {}
        if(status === true) {
          completedTask = { text : task.text, active: false, completed: true, id: task.id};
          return completedTask
        }
        return completedTask = { text : task.text, active: true, completed: false, id: task.id};
      }
      return t;
    })
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

  const filterChange = (filter) => {
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

  const deleteTask = taskToDelete => {
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
      {props.children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;