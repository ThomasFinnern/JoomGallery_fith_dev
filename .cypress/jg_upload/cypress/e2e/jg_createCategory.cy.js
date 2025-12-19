describe('Create category', () => {
	
  beforeEach(() => {
	
	//--- login ----------------------------------
	
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
	//--- select new category ----------------------------------
		
	cy.visit('/component/joomgallery/usercategories');
	// cy.get('h3').first().should('have.text', 'User categories');

	cy.get('.alert-heading').should('not.exist');
	// cy.get('.btn-success').click();
    cy.get('a').contains(' New category ').click();
	// cy.get('a:contains("New category")');

  })

  it('fill out a new category', () => {
	  
	//--- check category form ----------------------------------
		
	cy.get('h3').first().should('have.text', 'User category edit');
	
	//--- change title and alias ----------------------------------
		
	cy.get('[name="jform[title]"]').type("cypress category temp");
	// cy.get('[name="jform[alias]"]').type(""); // prevent double alias
	cy.get('[name="jform[alias]"]').clear(); // prevent double alias
	
	//--- save form and check title ----------------------------------
		
	cy.get('[data-submit-task="usercategory.save"]').click();
	
	// back to edit view
	cy.get('h3').first().should('have.text', 'User category edit');

	// success message ... from code  (actually second one)
	cy.get('.alert-message').eq(1).should('have.text', 'Item successfully saved.');
    cy.get('.alert-message').contains('Item successfully saved.');

	cy.get('[name="jform[title]"]').should('have.value', 'cypress category temp');
		
	//--- cancel to categories view ----------------------------------
		
	cy.get('[data-submit-task="usercategory.cancel"]').click();
	cy.get('h3').first().should('have.text', 'User categories');
	
	cy.contains('cypress category temp');
  })
  
})


