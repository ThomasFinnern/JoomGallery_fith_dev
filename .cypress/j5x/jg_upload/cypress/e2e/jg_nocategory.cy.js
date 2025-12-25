describe('user without management rights', () => {
	
  beforeEach(() => {
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type("jgnocat");
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
  })

  //--- start views ----------------------------------------------
  
  // can only be reached over menu item 
  it('displays form user panel with warning', () => {
	cy.visit('/component/joomgallery/userpanel');
	cy.get('h3').first().should('have.text', 'User panel');

	// Warning expected
	cy.get('.alert-info').should('exist');
//	cy.get('div.alert-info').should('exist');
  })

  it('displays form user images', () => {
	cy.visit('/component/joomgallery/userimages');
	cy.get('h3').first().should('have.text', 'User images');

	// Warning expected
	cy.get('.alert-info').should('exist');
//	cy.get('div.alert-info').should('exist');
  })
  
  it('displays form user categories', () => {
	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	// Warning expected
	cy.get('.alert-info').should('exist');
//	cy.get('div.alert-info').should('exist');
  })
  
  it('displays form user upload with warning (failes by )', () => {
	cy.visit('/component/joomgallery/userupload');
	cy.get('h3').first().should('have.text', 'User upload');

	// Warning expected
	cy.get('.alert-warning').should('exist');
//	cy.get('div.alert-warning').should('exist');
  })
  
  //--- edit ----------------------------------------------
  
  it('displays edit form new user category', () => {
	// cy.visit('/component/joomgallery/usercategory?layout=edit');
	cy.visit('/component/joomgallery/usercategory?layout=editCat');

	// // Warning expected
	// cy.get('.alert-heading').should('exist');
	// // cy.get('.alert-heading').should('not.exist');
  })
  
  // it('displays edit form existing user category', () => {
	// // cy.visit('/component/joomgallery/usercategory/38-cypress-01?layout=edit');
	// cy.visit('/component/joomgallery/usercategory/38-cypress-01?layout=editCat');

	// // No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	// // cy.get('.alert-heading').should('not.exist');
  // })
  
  // it('displays edit form existing user image', () => {
	// // cy.visit('/component/joomgallery/userimage/96-sonderlauf-5?layout=edit')
	// cy.visit('/component/joomgallery/userimage/96-sonderlauf-5?layout=editImg')

	// // No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	// // cy.get('.alert-heading').should('not.exist');
	
  // })
  
})


