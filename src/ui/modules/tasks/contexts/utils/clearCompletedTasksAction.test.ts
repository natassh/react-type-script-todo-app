import { Task } from '../TaskContext';
import { clearCompletedTasksAction } from './clearCompletedTasksAction';

describe('clearCompletedTasksAction', () => {
    it('should remove completed tasks from task array', () => {
        // Arrange  - Inicializa
        const task1: Task =  { 
          id: 1,
          text: "Hacer la compra", 
          active: true, 
          completed: true, 
          checked: true, 
        };
        const task2: Task =  { 
          id: 2,
          text: 'Pasear a Kira', 
          active: true, 
          completed: false, 
          checked: true, 
        };
        const task3: Task =  { 
          id: 2,
          text: 'Tarea 3', 
          active: true, 
          completed: false, 
          checked: true, 
        };

        //const tasks: Task[] = []
        const tasks: Task[] = [task1, task2, task3]
        const tasksExpected: Task[] = [task2, task3]

        // ACT - Actuar
        const newTasks: Task[] = clearCompletedTasksAction(tasks);
        
        // Assert - Comprobar
        expect(newTasks).toHaveLength(2);
        expect(newTasks).toEqual(tasksExpected)
    })

    it('should remove the original tasks when we have not a completed tasks', () => {
      // Arrange  - Inicializa
      const task2: Task =  { 
        id: 2,
        text: 'Pasear a Kira', 
        active: true, 
        completed: false, 
        checked: true, 
      };
      const task3: Task =  { 
        id: 2,
        text: 'Tarea 3', 
        active: true, 
        completed: false, 
        checked: true, 
      };

      //const tasks: Task[] = []
      const tasks: Task[] = [task2, task3]

      // ACT - Actuar
      const newTasks: Task[] = clearCompletedTasksAction(tasks);
      
      // Assert - Comprobar
      expect(newTasks).toHaveLength(2);
      expect(newTasks).toEqual(tasks)
    })

})