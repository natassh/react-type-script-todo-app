/// <reference types="cypress" />

context('Todo', () => {

    it('Can open the app', () => {
        cy.visit('http://localhost:3000/');

        const inputText = cy.get('.AddTaskForm__Input');
        
        inputText.type('Mi first task').should('have.value', 'Mi first task')

        inputText.type('{enter}')

        inputText.should('not.have.value')
    })

    it('Have correct tasks', () => {
        cy.get('.TaskList > div').should('have.length', 1);

        cy.contains('1 items');

        cy.get('.TasksMenu').contains('1 items');
    })

    it('Create a new task', () => {
        const inputText = cy.get('.AddTaskForm__Input');
        inputText.type('Mi second task').should('have.value', 'Mi second task')

        inputText.type('{enter}')

        inputText.should('not.have.value')
    })

    it('Mark task as completed', () => {
        const secondTask = cy.get(':nth-child(2) > :nth-child(1) > label')
        secondTask.click()

        secondTask.should('have.class','active')
    })

    it('Filter tasks by active', () => {
        let filterActive = cy.get('.TasksMenu .TasksFilters > :nth-child(2) > a')
        filterActive.click()
        
        filterActive = cy.get('.TasksMenu .TasksFilters > :nth-child(2) > strong')
        filterActive.should('have.class','actived')

        // tasks
        const tasks = cy.get('.TaskList > div')
        tasks.should('have.length', 1);

    })
    it('Filter tasks by completed', () => {
        let filterActive = cy.get('.TasksMenu .TasksFilters > :nth-child(3) > a')
        filterActive.click()
        
        filterActive = cy.get('.TasksMenu .TasksFilters > :nth-child(3) > strong')
        filterActive.should('have.class','actived')

        // tasks
        const tasks = cy.get('.TaskList > div')
        tasks.should('have.length', 1);

    })
    it('Show all tasks', () => {
        let filterActive = cy.get('.TasksMenu .TasksFilters > :nth-child(1) > a')
        
        filterActive.click()
        
        filterActive = cy.get('.TasksMenu .TasksFilters > :nth-child(1) > strong')
        filterActive.should('have.class','actived')

        const tasks = cy.get('.TaskList > div')
        tasks.should('have.length', 2);

    })
    it('Delete completed tasks', () => {
        const clearCompleted = cy.get('.TasksMenu__ClearCompleted')
        
        clearCompleted.click()
        

        const tasks = cy.get('.TaskList > div')
        tasks.should('have.length', 1);

    })

    it('Change dark theme', () => {
        const theme = cy.get('.LightDarkMode')
        
        theme.click()
        
        const classBody = cy.get('body')
        classBody.should('have.class','darked')

    })
    it('Change light theme', () => {
        const theme = cy.get('.LightDarkMode')
        
        theme.click()
        
        const classBody = cy.get('body')
        classBody.should('have.class','lighted')

    })
});