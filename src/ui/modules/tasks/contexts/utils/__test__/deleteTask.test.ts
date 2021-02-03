import { Task } from '../../TaskContext';
import { deleteTaskAction } from '../deleteTaskAction';

describe('deleteTaskAction', () => {
  it('should delete the task given of the tasks array', () => {
      // Arrange  - Inicializa
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

      const tasks: Task[] = [task1, task2]

      // ACT - Actuar
      const newTasks: Task[] = deleteTaskAction(tasks, task2);
      
      // Assert - Comprobar
      expect(newTasks).toHaveLength(1);
  })
})