describe('edit category by icon ', () => {
	
  beforeEach(() => {
	
	cy.viewport(1000, 1100);

	//--- login ----------------------------------
	
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
	//--- select category and edit ----------------------------------
		
	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	cy.get('.alert-heading').should('not.exist');

	//--- select show all ----------------------------------
		
	cy.get('select#list_limit').select('All');
	
	//--- category should exist ----------------------------------
		
	// category should exist
	cy.get('a').contains('cypress category temp').should('exist');;

	//--- click on row category icon ----------------------------------
		
	// Category name then find next edit icon button in row 
	// go parent up to tr (row) , then siblings find child with class '.icon-edit'
	cy.get('a').contains('cypress category temp')
		.parent().parent()
		.find('.icon-edit')
		.click();

	// // works if only one categoriy exist
	// // when change should be first cy.get('.icon-edit').first().click();
	// cy.get('.icon-edit').eq(1).click();
	
  })

  it('fill out a new category', () => {
	  
	//--- check category form ----------------------------------
		
	cy.get('h3').first().should('have.text', 'User category edit');
	
	// test if matching
	cy.get('[name="jform[title]"]').should('have.value', 'cypress category temp');
	
	//--- change title and alias ----------------------------------

	cy.log('01.title');
	cy.get('[name="jform[title]"]').clear().type("cypress category edited");
	// cy.get('[name="jform[alias]"]').type(""); // prevent double alias
	cy.get('[name="jform[alias]"]').clear(); // prevent double alias
	
	//--- save and exit to list ----------------------------------
		
	// back to list view
	cy.get('[data-submit-task="usercategory.saveAndClose"]').click();
	
	cy.log('02.list view');
	cy.get('h3').first().should('have.text', 'User categories');

	// success message ... from code (actually second one)
	cy.get('.alert-message').eq(1).should('have.text', 'Item successfully saved.');
    cy.get('.alert-message').contains('Item successfully saved.');

	//--- select show all ----------------------------------
		
	cy.get('select#list_limit').select('All');
	
	//--- rewrite name to original -------------------------------------------------

	// Category name then find next edit icon button in row 
	// go parent up to tr (row) , then siblings find child with class '.icon-edit'
	cy.get('a').contains('cypress category edited')
		.parent().parent()
		.find('.icon-edit')
		.click();

	// // works if only one categoriy exist
	// // when change should be first cy.get('.icon-edit').first().click();
	// cy.get('.icon-edit').eq(1).click();
	
	//--- change title and alias ----------------------------------
		
	cy.log('03.edit view');
	cy.get('[name="jform[title]"]').clear().type("cypress category temp");
	// cy.get('[name="jform[alias]"]').type(""); // prevent double alias
	cy.get('[name="jform[alias]"]').clear(); // prevent double alias
	
	//--- save and exit to list ----------------------------------
		
	// back to list view
	cy.get('[data-submit-task="usercategory.saveAndClose"]').click();
	
	cy.log('04.list view');
	cy.get('h3').first().should('have.text', 'User categories');

	//--- select show all ----------------------------------
		
	cy.get('select#list_limit').select('All');
	
	//--- finish with check ----------------------------------------------------------

	// category name is also link 
	// attention: there may be more than one
	cy.get('a').contains('cypress category temp');

  })
    
})
