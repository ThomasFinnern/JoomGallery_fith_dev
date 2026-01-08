
//--- login ----------------------------------

it('displays form user panel', () => {
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();

	cy.visit('/component/joomgallery/userpanel');
	cy.get('h3').first().should('have.text', 'User panel');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
	cy.get('b:contains("Warning")').should('not.exist');
});

it('neu', function() {});
it('neu', function() {});

it('neu', function() {});

