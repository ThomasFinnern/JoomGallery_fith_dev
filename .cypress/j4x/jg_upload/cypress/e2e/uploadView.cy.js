describe('visit upload view', () => {
	
  beforeEach(() => {
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
  })

  it('displays form user upload', () => {
	cy.visit('/component/joomgallery/userupload');
	cy.get('h3').first().should('have.text', 'User upload');

	// cy.get('.alert-heading').should('exist');
	cy.get('.alert-heading').should('not.exist');
  })
  	  
// ToDo: further checks	  
// 	- select cat, should have more then zero ...  
// 	- switch debug flag
// 	- fill out ...
// 	- 
// 	- ! upload should be a seperate file
	  
})

