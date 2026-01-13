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

    //--- select upload view ----------------------------------

    cy.visit('/component/joomgallery/userupload');
    cy.get('h3').first().should('have.text', 'User upload');

    cy.get('.alert-heading').should('not.exist');
})

it('upload file into cat. love locks', () => {

    //--- check upload form ----------------------------------

    cy.get('h3').first().should('have.text', 'User upload');

    //--- select category cy love locks ----------------------------------

    cy.log('--- select category "cy love locks"');

    //--- select category cy love locks ----------------------------------

    cy.get('#adminForm div.choices__inner').click();

    cy.get('.choices__item').contains('cy love locks').should('exist');
    cy.get('.choices__item').contains('cy love locks').click();


    cy.log('first ok');

})

it('second', function() {
    cy.get('[name="jform[title]"]').click();
    cy.get('[name="jform[title]"]').type('cofffee');
    cy.get('[name="jform[author]"]').click();
    cy.get('[name="jform[author]"]').type('Thomas');
    cy.get('#adminForm div.choices__inner').click();
    cy.get('#jform_debug1').check();
    cy.get('#adminForm button.collapsed').click();
});

