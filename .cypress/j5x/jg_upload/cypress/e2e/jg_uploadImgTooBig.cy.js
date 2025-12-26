describe('Create category', () => {
	
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
	// cy.get('.btn-success').click();

  })

  it('upload file into cat. love locks', () => {
	  
	//--- check upload form ----------------------------------
		
	cy.get('h3').first().should('have.text', 'User upload');
	
	//--- upload file (name) ----------------------------------
		
	cy.get('.uppy-Dashboard-AddFiles-list')
		.selectFile('cypress/fixtures/images/DSC_5517.JPG', {action: 'drag-drop'})	
		
	//--- select category cy love locks ----------------------------------
		
	cy.get('#jform_catid').should('exist')
	cy.get('select#jform_catid').should('exist')
	cy.get('.choices__list--single').should('exist')
	cy.get('.choices__list--single').click();

	cy.get('.choices__item').first().should('exist')
	cy.log('selection exists');
	cy.get('.choices__item').contains('cy love locks').should('exist')
	cy.log('selection click ');
	cy.get('.choices__item').contains('cy love locks').click()

	//--- change title and author ----------------------------------
		
	cy.get('[name="jform[title]"]').type("love it ");
	cy.get('[name="jform[author]"]').type("thomas");
	

	// cy.log('select exists');
	// cy.get('select#jform_catid').select("cy love locks");

	//--------------------------------------------------------------
	//--- click upload and check result ----------------------------------
	//--------------------------------------------------------------
		
	cy.log('--- upload click ---');
	cy.get('button.uppy-StatusBar-actionBtn--upload').click();
		
	// cy.log('upload wait');
	// cy.wait(500);

	// success icon svg
//	cy.log('success icon 01');
	cy.get('.uppy-Dashboard-Item-progressIndicator');
//	cy.log('success icon 02');
	cy.get('.uppy-Dashboard-Item-progressIndicator>.uppy-Dashboard-Item-progressIcon--circle');

	cy.get('div.uppy-StatusBar is-error').should('not.exist');
	cy.get('button').contains('Debug information').should('exist');

	cy.log('!!! upload "too big" finished !!!');


		
  })
  
})
