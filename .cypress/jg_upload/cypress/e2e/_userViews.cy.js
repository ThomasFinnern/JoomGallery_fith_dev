describe('visit all user views', () => {
	
  beforeEach(() => {
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
  
  // ----------------------------------------------  
  // Not working with uppy :-( => needs ? one image uploaded
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
	// cy.visit('/component/joomgallery/usercategory/38-cypress-01?layout=edit');
	cy.visit('/component/joomgallery/usercategory/38-cypress-01?layout=editCat');
	cy.get('h3').first().should('have.text', 'User category edit');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays edit form existing user image', () => {
	// cy.visit('/component/joomgallery/userimage/96-sonderlauf-5?layout=edit')
	cy.visit('/component/joomgallery/userimage/96-sonderlauf-5?layout=editImg')
	cy.get('h3').first().should('have.text', 'User image edit');

	// No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	cy.get('.alert-heading').should('not.exist');
	
  })

})


