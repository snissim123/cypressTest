describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('opens with CS Courses title', () => {
      cy.visit ('/');
      cy.get('[data-cy=title]').should('contain', 'CS Courses');
    });

    it('Disables the AI course when ML is selected as they are at the same time', () => {
        cy.visit ('/');
        cy.get('[data-cy=ML]').click();
        cy.get('[data-cy=AI]').should('be.disabled');
      });
  });