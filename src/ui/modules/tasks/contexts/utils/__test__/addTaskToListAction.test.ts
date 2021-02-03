import { Task } from '../../TaskContext';
import { addTaskToListAction } from '../addTaskToListAction';

describe('addTaskToListAction', () => {
  it('should added the task to the tasks array', () => {
    const task1: Task =  { 
      id: 1,
      text: "Hacer la compra", 
      active: true, 
      completed: false, 
      checked: true, 
    };
    const task2: Task =  { 
      id: 2,
      text: 'Pasear a Kira', 
      active: true, 
      completed: false, 
      checked: true, 
    };

    const newTextTask = 'Tarea 3';
    const tasks: Task[] = [task1, task2]

    const newTasks: Task[] = addTaskToListAction(tasks, newTextTask);
    
    expect(newTasks).toHaveLength(3);
  })
})