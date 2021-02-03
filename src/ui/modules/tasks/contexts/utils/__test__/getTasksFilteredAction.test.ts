import { Task } from '../../TaskContext';
import { getTasksFilteredAction } from '../getTasksFilteredAction';

describe('getTasksFilteredAction', () => {
  it('should create an array with the filtered tasks', () => {
      const task1: Task =  { 
      id: 1,
      text: 'task1', 
      active: true, 
      completed: false, 
      checked: true, 
    };

    const task2: Task =  { 
      id: 2,
      text: 'task2', 
      active: true, 
      completed: false, 
      checked: true, 
    };
    const task3: Task =  { 
      id: 3,
      text: 'task3', 
      active: false, 
      completed: true, 
      checked: true, 
    };

  const tasks: Task[] = [task1, task2, task3]

  const newTasks: Task[] = getTasksFilteredAction(tasks, "completed");
  
  expect(newTasks).toHaveLength(1);
      
  })
})
