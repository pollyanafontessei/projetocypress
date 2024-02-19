///<reference types="cypress"/>

describe('Asserts', () => {

   it.only('Verificar se o elemento está visivil', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click()


        cy.get('.account_form>h3')
            .should('be.visible')

        cy.get('.account_form>h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')
        //should mostra me. Muito bom para fazer validações. pesquisar documentação cypress para usar o que faz sentido no teste.
        //valida se o teste está funcionando.
        // expect também verficia se está visivel o elemento, validação final utilizado api

        //cy.get('.account_form>h3') 

        //.then((element)=>{ 
        // expect(element.tex()).eq('Login')
        // expect(element).to.be.visible



        //})


    })

})









