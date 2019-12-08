describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('opens with CS Courses title', () => {
      cy.visit ('/');
      cy.get('[data-cy=title]').should('contain', 'CS Courses');
    });
  });