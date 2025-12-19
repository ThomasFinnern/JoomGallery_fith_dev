describe('visit all user views', () => {
	
  beforeEach(() => {
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
  })

  it('displays form user images', () => {
	cy.visit('userimages');
	cy.get('h3').first().should('have.text', 'User images');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays form user categories', () => {
	cy.visit('usercategories');
	cy.get('h3').first().should('have.text', 'User categories');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays form user panel', () => {
	cy.visit('userpanel');
	cy.get('h3').first().should('have.text', 'User panel');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays edit form new user category', () => {
	// cy.visit('usercategory?layout=edit');
	cy.visit('usercategory?layout=editCat');
	// cy.visit('usercategory?layout=editCat');
	// cy.visit('usercategory?layout=editCat');
	// cy.visit('usercategories');
	// cy.get('.btn-success').click();
	cy.get('h3').first().should('have.text', 'User category edit');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays edit form existing user category', () => {
	// cy.visit('usercategory/38-cypress-01?layout=edit');
	cy.visit('usercategory/38-cypress-01?layout=editCat');
	// cy.visit('usercategory?layout=editCat');
	// cy.visit('usercategory?layout=editCat');
  	// cy.visit('usercategories');
	// cy.get('.btn-success').click();
	cy.get('h3').first().should('have.text', 'User category edit');

	// No error/alarm ... from code 
	cy.get('.alert-heading').should('not.exist');
  })
  
  it('displays edit form existing user image', () => {
	// cy.visit('userimage/96-sonderlauf-5?layout=edit')
	cy.visit('userimage/96-sonderlauf-5?layout=editImg')
	// cy.visit('http://127.0.0.1/joomgallery5x_dev/component/joomgallery/userimage?layout=editImg');
	// cy.visit('userimage?layout=edit');
	cy.get('h3').first().should('have.text', 'User image edit');

	// No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	cy.get('.alert-heading').should('not.exist');
	
  })

  // ----------------------------------------------  
  // Not working with uppy :-(
  it('displays form user upload', () => {
	cy.visit('/component/joomgallery/userupload');
	cy.get('h3').first().should('have.text', 'User upload');

	// No error/alarm ... from code 
	// cy.get('.alert-heading').should('exist');
	cy.get('.alert-heading').should('not.exist');
  })
	  
})


