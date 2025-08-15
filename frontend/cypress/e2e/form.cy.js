describe('Form tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Add ToDo form', () => {
    cy.getDataTest('addtodo-form').find('[data-test=\'addtodo-title\']').type('Cypress tutorial');
    cy.getDataTest('addtodo-form').find('[data-test=\'addtodo-desc\']').type('description for cypress');
    cy.getDataTest('addtodo-btn').click()

    cy.getDataTest('todos-list').should('have.length', 1)

    cy.wait(2000)
  })

  it('Complete button works correctly', () => {
    cy.get('[data-test=\'complete-btn\']').click();
    cy.wait(2000)
  })

  it('Intercepts', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/todos/',
      },
      {
        statusCode: 200,
        body: {
          fixture: 'example.json'
        }
      }
    );
    // cy.getDataTest('todos-list').within(() => {
    //   cy.get('li').should('have.length', 2)
    // })

    // cy.getDataTest('delete-btn').click();
  })

  it('Test Delete todo', () => {
    cy.getDataTest('delete-btn').click()
    cy.getDataTest('todos-list').should('have.length', 1)
  })
})
