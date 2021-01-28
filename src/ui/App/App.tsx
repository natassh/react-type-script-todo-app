import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTaskForm from '../modules/tasks/components/AddTaskForm';
import Tasks from '../modules/tasks/components/Tasks';
import TasksProvider from '../modules/tasks/contexts/TaskContext';
import ThemeProvider from '../contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header/>
        <main>
          <div className="cw">
          <TasksProvider>
            <AddTaskForm />
            <Tasks />
          </TasksProvider>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
