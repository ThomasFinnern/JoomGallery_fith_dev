describe('Delete image love it -1', () => {
	
  beforeEach(() => {
	
	cy.viewport(1000, 1100);

	//--- login ----------------------------------
	
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
	//--- select existing image ----------------------------------
		
	cy.visit('/component/joomgallery/userimages');
	cy.get('h3').first().should('have.text', 'User images');

	//--- select show all ----------------------------------
		
	cy.get('select#list_limit').should('exist');
	cy.get('select#list_limit').trigger('click');
	cy.get('select#list_limit').select('All');
	cy.get('select#list_limit').trigger('click');
	
	//--- image should exist ----------------------------------
		
	// image should exist
	cy.get('a').contains('love it -1').should('exist');;

  })

  it('delete image', () => {
	  
	//--- start with existing ----------------------------------
		
	// image should exist
	cy.get('a').contains('love it -1').should('exist');;

	//--- delete image ----------------------------------
		
	// go parent up to tr (row) , then siblings find child with class '.icon-edit'
	cy.get('a').contains('love it -1').first()
		.parent().parent()
		.find('.icon-trash')
		.click();

	//--- check category is deleted ----------------------------------
		
	// success message ... from code  (actually second one)
	cy.get('.alert-message').eq(1).should('have.text', '1 Items successfully deleted.');
    cy.get('.alert-message').contains('1 Items successfully deleted.');

	cy.get('a').contains('love it -1').should('not.exist');;

  })

})

