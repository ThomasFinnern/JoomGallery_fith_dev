describe('visit all user views', () => {
	
  // before(() => {
	
	// cy.viewport(1000, 1100);

	// //--- login ----------------------------------
	
	// cy.visit('/');
	// cy.get('[name="username"]').click();
	// cy.get('[name="username"]').type(Cypress.env("login_name"));
	// cy.get('[name="password"]').click();
	// cy.get('[name="password"]').type(Cypress.env("login_pass"));
	// cy.get('[name="Submit"]').click();
  // })

  beforeEach(() => {
	
	cy.viewport(1000, 1100);

	//--- login ----------------------------------
	
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
  })

  //--- start views ----------------------------------------------
  
  it('displays form user panel', () => {
	cy.visit('/component/joomgallery/userpanel');
	cy.get('h3').first().should('have.text', 'User panel');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays form user images', () => {
	cy.visit('/component/joomgallery/userimages');
	cy.get('h3').first().should('have.text', 'User images');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays form user categories', () => {
	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays form user upload', () => {
	cy.visit('/component/joomgallery/userupload');
	cy.get('h3').first().should('have.text', 'User upload');

	// No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	cy.get('.alert-heading').should('not.exist');
  })
	  
  //--- edit ----------------------------------------------
  
  it('displays edit form new user category', () => {
	// cy.visit('/component/joomgallery/usercategory?layout=edit');
	cy.visit('/component/joomgallery/usercategory?layout=editCat');
	cy.get('h3').first().should('have.text', 'User category edit');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays edit form existing user category', () => {
	// following needs same menu id on ech web page j4x, j5x, j6x. So ignored
	// // cy.visit('/component/joomgallery/usercategory/38-cypress-01?layout=edit');
	// cy.visit('/component/joomgallery/usercategory/38-cypress-01?layout=editCat');
	// cy.get('h3').first().should('have.text', 'User category edit');

	// // No error/alarm ... from code 
	// cy.get('.alert-heading').should('not.exist');
	
	//--- select category and edit ----------------------------------
		
	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	cy.get('.alert-heading').should('not.exist');

	//--- select show all ----------------------------------
		
	cy.get('select#list_limit').should('exist');
	cy.get('select#list_limit').trigger('click');
	cy.get('select#list_limit').select('All');
	cy.get('select#list_limit').trigger('click');
	
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

	cy.get('h3').first().should('have.text', 'User category edit');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays edit form existing user image', () => {
	// following needs same menu id on ech web page j4x, j5x, j6x. So ignored
	// // cy.visit('/component/joomgallery/userimage/96-sonderlauf-5?layout=edit')
	// cy.visit('/component/joomgallery/userimage/96-sonderlauf-5?layout=editImg')
	// cy.get('h3').first().should('have.text', 'User image edit');

	// // No error/alarm ... from code 
	// // cy.get('.alert-heading').should('exist');
	// cy.get('.alert-heading').should('not.exist');	
	
	//--- select image and edit ----------------------------------
		
	cy.visit('/component/joomgallery/userimages');
	cy.get('h3').first().should('have.text', 'User images');

	cy.get('.alert-heading').should('not.exist');

	//--- select show all ----------------------------------
		
	cy.get('select#list_limit').should('exist');
	cy.get('select#list_limit').trigger('click');
	cy.get('select#list_limit').select('All');
	cy.get('select#list_limit').trigger('click');
	
	//--- image should exist ----------------------------------
		
	// image should exist
	cy.get('a').contains('love it -1').should('exist');;

	//--- click on row image icon ----------------------------------
		
	// Category name then find next edit icon button in row 
	// go parent up to tr (row) , then siblings find child with class '.icon-edit'
	cy.get('a').contains('love it -1')
		.parent().parent()
		.find('.icon-edit')
		.click();




	cy.get('h3').first().should('have.text', 'User image edit');

	// No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	cy.get('.alert-heading').should('not.exist');	
  })

  // after(() => {
	
	// cy.viewport(1000, 1100);

	// //--- logout ----------------------------------
	
	// cy.visit('/');
	
	// cy.get('button').contains('Log out').should('exist');
	// cy.get('button').contains('Log out').click();

  // })

})

