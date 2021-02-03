import {Task } from './TaskContext'

export const getInitialState = (): Task[] => {
    const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
    return tasks;
  };
  