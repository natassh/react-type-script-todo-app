import React from 'react';
import TaskList from '../TaskList';
import TasksMenu from '../TasksMenu';
import './Tasks.css';

const Tasks = () => {
  return (
    <section className="Tasks">
      <TaskList />
      <TasksMenu />
    </section>
  )
};

export default Tasks;
