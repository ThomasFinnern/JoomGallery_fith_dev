
let galleryName = "cy test";

let imageName = "test_coffee.jpg";

beforeEach(() => {

	cy.viewport(1000, 1100);

	//--- login ----------------------------------

	cy.visit('/');
	cy.get('[name="username"]').click();
	cy.get('[name="username"]').type(Cypress.env("login_name"));
	cy.get('[name="password"]').click();
	cy.get('[name="password"]').type(Cypress.env("login_pass"));
	cy.get('[name="Submit"]').click();
	
});

it('02.categories filter selection is kept after edit return  ', () => {
	
	//--- check categories form ----------------------------------
		
	cy.visit('/component/joomgallery/usercategories');
	cy.get('h3').first().should('have.text', 'User categories');
	
	cy.get('.alert-heading').should('not.exist');

	cy.get('[name="list[fullordering]"]').select('a.title ASC');
	cy.wait(50);

	// check result
	cy.get('[name="list[fullordering]"]').find(':selected')
		.contains("Title ascending").should('exist')

	//
	// cy.get('[name="list[fullordering]"]').select('a.title DESC');
	//
	// // check result
	// cy.get('[name="list[fullordering]"]').find(':selected')
	// 	.contains("Title descending").should('exist')
});

it('second try', function() {
	cy.get('a[href="/joomgallery5x_dev/user-panel"]').click();
	cy.get('a[href="/joomgallery5x_dev/user-panel/usercategories"]').click();
	
	cy.get('[name="list[fullordering]"]').select('a.title ASC');

	// check result
	cy.wait(50);
	cy.get('[name="list[fullordering]"]').find(':selected')
		.contains("Title ascending").should('exist')

	cy.get('#categoryList tr[data-item-id="7"] th.title-cell a').click();
	cy.get('#adminForm button.btn-danger').click();
	cy.get('[name="list[fullordering]"]').find(':selected')
		.contains("Title ascending").should('exist')
	
	cy.get('#adminForm a.btn-info').click();
	cy.get('[name="list[fullordering]"]').select('a.title ASC');

	cy.get('#imageList tbody tr:nth-child(1) th.title-cell a').click();
	cy.get('#adminForm button.btn-danger').click();
	cy.get('[name="list[fullordering]"]').should('have.id', 'list_fullordering');
});

it('third try', function() {
	cy.get('a[href="/joomgallery5x_dev/user-panel"]').click();
	cy.get('a[href="/joomgallery5x_dev/user-panel/usercategories"]').click();
	cy.get('#adminForm span.icon-angle-down').click();
	cy.get('#adminForm span.icon-angle-down').click();
	cy.get('[name="list[fullordering]"]').select('a.title ASC');

	// check result
	cy.wait(50);
	cy.get('[name="list[fullordering]"]').find(':selected')
		.contains("Title ascending").should('exist')

	cy.get('#adminForm a[href="/joomgallery5x_dev/user-panel"]').click();
	cy.get('a[href="/joomgallery5x_dev/user-panel/usercategories"]').click();
	cy.get('[name="list[fullordering]"]').select('img_count ASC');

	// check result
	cy.wait(50);
	cy.get('[name="list[fullordering]"]').find(':selected')
		.contains("Images ascending").should('exist')

});

