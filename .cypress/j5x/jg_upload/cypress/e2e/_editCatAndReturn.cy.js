describe('ewdit/create category and return to user panel', () => {

	// let galleryName = 'cypress category temp';
	let galleryName = "cy test";
	let imageName = "love it -1";

	beforeEach(() => {
	
	cy.viewport(1000, 1100);

	//--- login ----------------------------------
	
	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
	cy.visit('/component/joomgallery/userpanel');
	cy.get('h3').first().should('have.text', 'User panel');
	
  })

  //--- start views ----------------------------------------------
  


  it('Edit -> cancel', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })

  it('Edit -> save -> cancel', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('Edit -> save and close', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('Edit -> save -> saveAndClose', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })



  it('Edit -> save2copy', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('Edit -> save -> save2copy', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('Edit -> save2new', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('Edit -> save -> save2new', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })



  it('New -> cancel', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('New -> save -> cancel', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('New -> save and close', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('New -> save -> saveAndClose', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })



  it('New -> save2copy', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('New -> save -> save2copy', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('New -> save2new', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


  it('New -> save -> save2new', () => {


	cy.get('h3').first().should('have.text', 'User panel');
  })


})

