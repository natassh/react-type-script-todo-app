import React, {useContext, useState, useEffect} from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import './TaskList.css';
import iconClose from '../../../../assets/images/icon-cross.svg';

const TaskList = () => {
  const [isShown, setIsShown] = useState(false);
  const [taskHover, setTaskHover] = useState();
  const [width, setWidth] = useState();
  const { getTasksFiltered, changeStatusTask, deleteTask } = useContext(TaskContext);
  const tasks = getTasksFiltered();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  
  const handleChangeToCompletedTask = (task) => {
    console.log('task: ', task)
    changeStatusTask(task);
  }
  
  const handleDeleteTask = (task) => {
    deleteTask(task);
  }
  
  const handleOnMouseEnter = task => {
    setTaskHover(task)
    setIsShown(true)
  }

  return (
    <form className="TaskList">
      {tasks.map(task => {
        return (
          <div key={task.id}
            onMouseEnter={() => handleOnMouseEnter(task)}
            onMouseLeave={() => setIsShown(false)}
          >
            <div>
              <input 
                type="checkbox" 
                id={task.id} 
                checked={task.checked ? "checked" : ""}
                onChange={() => {
                  handleChangeToCompletedTask(task)
                }}
              />
              <label 
                htmlFor={task.id}
                className = {task.completed ? "active" : ""}
              >
                {task.text}
              </label>
            </div>
            <div>
              {taskHover === task && isShown && (
                <a 
                  href="#" 
                  className="TaskList__buttonDelete"
                  onClick={() => {
                    handleDeleteTask(task);
                  }}
                >
                  <img src={iconClose} alt="Icono cerrar" />
                </a>
              )}
              {width <= 768 && (
                <a 
                href="#" 
                className="TaskList__buttonDelete"
                onClick={() => {
                  handleDeleteTask(task);
                }}
              >
                <img src={iconClose} alt="Icono cerrar" />
              </a>
              )}
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default TaskList;