describe('template spec', () => {
	
  beforeEach(() => {
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
  })

  // Not working with uppy :-(
  it('displays form user upload', () => {
	cy.visit('/component/joomgallery/userupload');
	// cy.get('h3').first().should('have.text', 'User upload');

	// ToDo: realise a if ??? 
	// category warning when no categories exist
	cy.get('.alert-heading').should('exist');
	// cy.get('.alert-heading').should('not.exist');
  })
  
  // it('displays form upload', () => {
	// cy.visit('/')
	// cy.get('[data-testid="first-name"]').clear()
	// cy.get('form').submit()
	// cy.get('[data-testid="errors"]').should('contain', 'First name is required')
  // })
	  
})


