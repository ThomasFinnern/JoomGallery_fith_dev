
let galleryName = "cy test";
let imageName = "test_coffee.jpg";

beforeEach(() => {

	cy.viewport(1000, 1100);

	//--- login ----------------------------------

	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
	//--- select upload view ----------------------------------

	cy.visit('/component/joomgallery/userupload');
	cy.get('h3').first().should('have.text', 'User upload');

	cy.get('.alert-heading').should('not.exist');
});

it('prepare first ', () => {
	
	//--- check upload form ----------------------------------
		
	cy.get('h3').first().should('have.text', 'User upload');
	
	
	cy.log('first ok');
});
