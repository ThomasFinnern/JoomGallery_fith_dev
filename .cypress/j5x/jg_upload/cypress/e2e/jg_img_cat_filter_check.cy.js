describe('Test filter setting is kept after return from edit', () => {

    let galleryName = "cy test";
    // let galleryName = "cypress category temp";
    let galleryEditName = "cypress category edited";
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

    })

    it('01.images filter selection is kept after URL change and return', () => {

        //--- check images form ----------------------------------

        // SEF
        // cy.visit('/component/joomgallery/userimages');
        // No SEF
        cy.visit('/?option=com_joomgallery&view=userimages');
        cy.get('h3').first().should('have.text', 'User images');

        cy.get('.alert-heading').should('not.exist');

        //--- select filter ------------------------------------------

        cy.get('[name="list[fullordering]"]').select('a.title ASC');

        // check result
        cy.wait(50);
        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

        //--- change to user panel and back ----------------------------------

        // SEF
        // cy.get('#adminForm a[href="/user-panel"]').click();
        // cy.get('a[href="/user-panel/userimages"]').click();
        // No SEF
        // cy.get('#adminForm a[href="http://127.0.0.1/joomgallery5x_dev/index.php?option=com_joomgallery&view=userpanel&Itemid=138"]').click();
        // cy.get('a[href="http://127.0.0.1/joomgallery5x_dev/index.php?option=com_joomgallery&view=userimages&Itemid=138"]').click();
        // Both: SEF or No SEF
        cy.get('a.btn-primary').contains('User panel').click();
        cy.get('a.btn-info').contains('User images').click();

        cy.get('h3').first().should('have.text', 'User images');

        //--- test for old filter setting ------------------------------------------

        // cy.get("#my-select-element option:selected").should("have.value", 3);
        cy.get('[name="list[fullordering]"]')
            .contains("Title ascending").should('exist');
    });

    it('02.images filter selection is kept after edit return  ', () => {

        //--- check images form ----------------------------------

        // cy.visit('/component/joomgallery/userimages');
        cy.visit('/?option=com_joomgallery&view=userimages');
        cy.get('h3').first().should('have.text', 'User images');

        cy.get('.alert-heading').should('not.exist');

        //--- select filter ------------------------------------------

        cy.get('[name="list[fullordering]"]').select('a.title ASC');

        // check result
        cy.wait(50);
        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

        //--- image should exist ----------------------------------

        // image should exist
        cy.get('a').contains('love it -1').should('exist');

        //--- click on row image title  ----------------------------------

        // image name is also link
        cy.get('a').contains('love it -1').click();

        // use cancel
        cy.get('#adminForm button.btn-danger').click();

        // cy.get("#my-select-element option:selected").should("have.value", 3);
        cy.get('[name="list[fullordering]"]')
            .contains("Title ascending").should('exist');

        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

    });

    it('03.categories filter selection is kept after URL change and return', () => {

        //--- check categories form ----------------------------------

        // SEF
        //cy.visit('/component/joomgallery/usercategories');
        // No SEF
        cy.visit('/?option=com_joomgallery&view=usercategories');
        cy.get('h3').first().should('have.text', 'User categories');

        cy.get('.alert-heading').should('not.exist');

        //--- select filter ------------------------------------------

        cy.get('[name="list[fullordering]"]').select('a.title ASC');

        // check result
        cy.wait(50);
        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

        //--- change to user panel and back ----------------------------------

        // SEF
        // cy.get('#adminForm a[href="/user-panel"]').click();
        // cy.get('a[href="/user-panel/usercategories"]').click();
        // No SEF
        // cy.get('#adminForm a[href="http://127.0.0.1/joomgallery5x_dev/index.php?option=com_joomgallery&view=userpanel"]').click();
        // cy.get('#adminForm a[href="http://127.0.0.1/joomgallery5x_dev/index.php?option=com_joomgallery&view=usercategories"]').click();
        // Both: SEF or No SEF
        cy.get('a.btn-primary').contains('User panel').click();
        cy.get('a.btn-info').contains('User categories').click();

        cy.get('h3').first().should('have.text', 'User categories');

        //--- test for old filter setting ------------------------------------------

        // cy.get("#my-select-element option:selected").should("have.value", 3);
        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

    })

    it('04.categories filter selection is kept after edit return  ', () => {

        //--- check categories form ----------------------------------

        // cy.visit('/component/joomgallery/usercategories');
        cy.visit('/?option=com_joomgallery&view=usercategories');
        cy.get('h3').first().should('have.text', 'User categories');

        cy.get('.alert-heading').should('not.exist');

        //--- select filter ------------------------------------------

        cy.get('[name="list[fullordering]"]').select('a.title ASC');

        // check result
        cy.wait(50);
        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

        //--- category should exist ----------------------------------

        // category should exist
        cy.get('a').contains(galleryName).should('exist');

        //--- click on row category title  ----------------------------------
        // category name is also link
        cy.get('a').contains(galleryName).click();

        // use cancel
        cy.get('#adminForm button.btn-danger').click();

        cy.get('[name="list[fullordering]"]').contains("Title ascending").should('exist');

        cy.get('[name="list[fullordering]"]').find(':selected')
            .contains("Title ascending").should('exist')

    })

})
