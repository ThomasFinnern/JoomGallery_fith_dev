describe('Upload image to cat. "cy love locks"', () => {

    let galleryName = "cy love locks";
    //let imageName = "test_coffee.jpg";
    let imageName = "2015-10-11_00001.jpg";
    let title = "love it ";
    let author = "thomas";
    // let g = "";
    // let g = "";

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

    it('upload file into cat. "cy love locks"', () => {

        //--- check upload form ----------------------------------

        cy.get('h3').first().should('have.text', 'User upload');

        //--- select category "cy love locks" ----------------------------------

        cy.log('--- select category "cy love locks"');

        cy.get('#adminForm div.choices__inner').click();

        cy.get('.choices__item').contains(galleryName).should('exist');
        cy.get('.choices__item').contains(galleryName).click();

        cy.log('--- is selected ?');
        cy.get('.choices__item--selectable').contains(galleryName).should('exist');

        //--- change title and author ----------------------------------

        cy.log('--- title and author');
        cy.get('[name="jform[title]"]').clear().type(title);
        cy.get('[name="jform[author]"]').type(author);

        //--- activate debug ----------------------------------

        cy.log('--- activate debug');
        cy.get('#jform_debug1').check();

        //--- test limits ----------------------------------

        cy.log('--- test limits');
        // cy.get('#adminForm button.collapsed').click();
        // cy.get('button').contains('Max upload limit (calculated size)').click();
        //cy.get('button').contains('\n            Max upload limit (calculated size):&nbsp;&nbsp;').click();
        //cy.get('button').contains('Max upload limit (calculated size):&nbsp;&nbsp;').click();
// ToDo: click (different from j4 and j5 =>
// a) code: improve contains text -> \n ....
// b) give item an #id ....
//        cy.get('h2 > button.collapsed').click();
        cy.get('td').contains('Maximum script limit:').should('exist');

        //--- upload file (name) ----------------------------------

        cy.log('--- drag and drop file');
        cy.get('.uppy-Dashboard-AddFiles-list')
            .selectFile('cypress/fixtures/images/' + imageName, {action: 'drag-drop'});

        //--------------------------------------------------------------
        //--- click upload and check result ----------------------------------
        //--------------------------------------------------------------

        cy.log('--- upload click ---');
        cy.get('button.uppy-StatusBar-actionBtn--upload').click();

        // cy.log('upload wait');
        // cy.wait(500);
        cy.wait(50);

        // success icon svg
        cy.get('.uppy-Dashboard-Item-progressIndicator');
        cy.get('.uppy-Dashboard-Item-progressIndicator>.uppy-Dashboard-Item-progressIcon--circle');

        cy.get('div.uppy-StatusBar is-error').should('not.exist');
        cy.get('button').contains('Debug information').should('not.exist');

        cy.log('!!! upload success !!!');
    })

})
