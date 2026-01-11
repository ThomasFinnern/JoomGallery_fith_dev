describe('Create category love locks', () => {

  beforeEach(() => {

	cy.viewport(1000, 1100);

	//--- login ----------------------------------

	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();

	//--- visit category list ----------------------------------

	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	cy.get('.alert-heading').should('not.exist');

	//--- select show all ----------------------------------

	cy.get('select#list_limit').select('All');

	// category does not exist
	cy.get('a').contains('cy love locks').should('not.exist');;

	//--- select new category ----------------------------------

    cy.get('a').contains(' New category ').click();
	// cy.get('a:contains("New category")');

  })

  it('fill out a new category (love locks)', () => {

	//--- check category form ----------------------------------

	cy.get('h3').first().should('have.text', 'User category edit');

	//--- change title and alias ----------------------------------

	cy.get('[name="jform[title]"]').clear().type("cy love locks");
	// cy.get('[name="jform[alias]"]').type(""); // prevent double alias
	cy.get('[name="jform[alias]"]').clear(); // prevent double alias

	//--- save and exit to list ----------------------------------

	// back to list view
	cy.get('[data-submit-task="usercategory.saveAndClose"]').click();

	//--- check messages category is created ----------------------------------

	// success message ... from code  (actually second one)
	cy.get('.alert-message').eq(1).should('have.text', 'Item successfully saved.');
    cy.get('.alert-message').contains('Item successfully saved.');

	//--- select show all ----------------------------------

	  cy.get('select#list_limit').select('All');

    //--- check gallery is created ----------------------------------

	cy.get('a').contains('cy love locks').should('exist');;

  })

})

