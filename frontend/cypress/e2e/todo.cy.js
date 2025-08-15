describe('First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('Contains correct header text', () => {
    cy.getDataTest('test-header').should('contains.text', 'Todo List');
  })
})
