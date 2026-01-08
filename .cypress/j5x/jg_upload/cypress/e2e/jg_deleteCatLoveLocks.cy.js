describe('Delete category love locks', () => {
	
  beforeEach(() => {
	
	cy.viewport(1000, 1100);

	//--- login ----------------------------------
	
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
	//--- select existing category ----------------------------------
		
	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	// category cy lovelock exists
	cy.get('a').contains('cy love locks');

  })

  it('delete gallery', () => {
	  
	//--- delete category ----------------------------------
		
	// go parent up to tr (row) , then siblings find child with class '.icon-edit'
	cy.get('a').contains('cy love locks')
		.parent().parent()
		.find('.icon-trash')
		.click();

	//--- check messages category is created ----------------------------------

	// success message ... from code  (actually second one)
	cy.get('.alert-message').eq(1).should('have.text', '1 Items successfully deleted.');
    cy.get('.alert-message').contains('1 Items successfully deleted.');

    //--- select show all ----------------------------------

    cy.get('select#list_limit').should('exist');
	cy.get('select#list_limit').trigger('click');
	cy.get('select#list_limit').select('All');
	cy.get('select#list_limit').trigger('click');

	  //--- check category is deleted ----------------------------------

	  cy.get('a').contains('cy love locks').should('not.exist');;

  })

})


