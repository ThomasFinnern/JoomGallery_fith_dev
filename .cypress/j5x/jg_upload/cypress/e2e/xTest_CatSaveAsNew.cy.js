
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
	
	//--- select user panel view  ----------------------------------

	cy.visit('/user-panel');
	cy.get('h3').first().should('have.text', 'User panel');

	cy.get('.alert-heading').should('not.exist');
})

it('prepare first ', () => {
	
	//--- check upload form ----------------------------------
		
	cy.get('h3').first().should('have.text', 'User panel');
	
	
	cy.log('first ok');
	cy.get('a.btn-success').click();
	cy.get('[name="jform[title]"]').click();
	cy.get('[name="jform[title]"]').type('SaveAs origin');
	cy.get('#adminForm button[data-submit-task="usercategory.save2new"]').click();
	cy.get('html').click();
	cy.get('[name="jform[alias]"]').clear();
	cy.get('[name="jform[title]"]').click();
	cy.get('[name="jform[title]"]').clear();
	cy.get('[name="jform[title]"]').type('SaveAs new');
	cy.get('#adminForm button[data-submit-task="usercategory.saveAndClose"]').click();
	cy.get('#categoryList button[data-item-id="cb3"] span.icon-trash').click();
})
