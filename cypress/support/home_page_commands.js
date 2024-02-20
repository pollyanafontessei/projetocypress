 import './home_page_commands'
 import './register_page_commands'
 //precisei manutenção altera o id
 //import { should } from "chai"
//quando importa commands fica vizivel para projeto inteiro
//criar proprios comandos que possuem açoes que definimos.
//sempre que criar tem que importar para meu e2e
//add adcionando novo comando - espera dois paramentros
//sempre importar a page
/// <reference types= "cypress" />
Cypress.Commands.add('accessRegisterPage',()=>{
    //Acessou a aplicação
    cy.visit('/')
    .get('.header-logo')
//entrou no registro
cy.get('.fa-lock')
    .click()
     //Verfica se está na página de cadastro
     cy.get('#user')
     .should('be.visible')
})

