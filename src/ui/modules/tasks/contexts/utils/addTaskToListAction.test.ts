import { Task } from '../TaskContext';
import { addTaskToListAction } from './addTaskToListAction';

describe('addTaskToListAction', () => {
    it('should added the task to the tasks array', () => {
        // Arrange  - Inicializa
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
        const task3: Task =  { 
          id: 2,
          text: 'Tarea 3', 
          active: true, 
          completed: false, 
          checked: true, 
        };

        //const tasks: Task[] = []
        const tasks: Task[] = [task1, task2]

        // ACT - Actuar
        const newTasks: Task[] = addTaskToListAction(tasks, task3.text);
        
        // Assert - Comprobar
        expect(newTasks).toHaveLength(3);
    })
})