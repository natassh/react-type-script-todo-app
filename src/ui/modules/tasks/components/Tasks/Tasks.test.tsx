import Tasks from './Tasks';
import TasksProvider, { Task } from '../../contexts/TaskContext';
import  * as getInitialState from '../../contexts/getInitialState';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('Tasks', () => {
  let getInitialStateMock: any =  jest.spyOn(getInitialState, 'getInitialState');
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
    active: false, 
    completed: true, 
    checked: false, 
  };
  const tasks: Task[] = [task1, task2];

  beforeEach(() => {
    getInitialStateMock.mockReturnValue(tasks);
  })
  
  it('should show the tasks', () => {
    //Inicialización
    const totalItems = '2 items';

    // Actuacion
    const {debug} = render(<TasksProvider><Tasks /></TasksProvider>);
    const element = screen.getByText(totalItems);
    
    // assert
    expect(element).toBeInTheDocument();
  });


  it('should show the active tasks', () => {
    //Inicialización
    const totalItems = '2 items';

    // Actuacion
    const {debug} = render(<TasksProvider><Tasks /></TasksProvider>);
    let totalItemsTask = screen.getByText(totalItems);

    // assert
    expect(totalItemsTask).toBeInTheDocument();

    const activeFilter = screen.queryAllByText('active');
    //debug(activeFilter[0]);

    userEvent.click(activeFilter[0]);

    totalItemsTask = screen.getByText('1 items');

    expect(totalItemsTask).toBeInTheDocument();
  });

})