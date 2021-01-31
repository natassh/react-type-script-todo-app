import React, {useContext, useState, useEffect} from 'react';
import { TaskContext, Task } from '../../contexts/TaskContext';
import './TaskList.css';
import iconClose from '../../../../assets/images/icon-cross.svg';

const TaskList = () => {
  const [isShown, setIsShown] = useState(false);
  const [taskHover, setTaskHover] = useState<Task>();
  const [width, setWidth] = useState<number>(0);
  const { getTasksFiltered, changeStatusTask, deleteTask } = useContext(TaskContext);
  const tasks = getTasksFiltered();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  
  const handleChangeToCompletedTask = (task: Task) => {
    changeStatusTask(task);
  }
  
  const handleDeleteTask = (task: Task) => {
    deleteTask(task);
  }
  
  const handleOnMouseEnter = (task: Task) => {
    setTaskHover(task)
    setIsShown(true)
  }

  return (
    <form className="TaskList">
      {tasks.map((task: Task)   => {
        const idElement = task.id.toString();
        return (
          <div key={task.id}
            onMouseEnter={() => handleOnMouseEnter(task)}
            onMouseLeave={() => setIsShown(false)}
          >
            <div>
              <input 
                type="checkbox" 
                id={idElement} 
                checked={task.checked}
                onChange={() => {
                  handleChangeToCompletedTask(task)
                }}
              />
              <label 
                htmlFor={idElement}
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