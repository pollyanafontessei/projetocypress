import './register_page_commands'
/// <reference types= "cypress" />
//pode ser organizado de uma dessas formas.
//Elementos foi criado objetos dentro do objetos com sua chave e valor, está organizado para quando precisar dar manutenção do código.
//Ou assim;
const botaoCadastrar = '#btnRegister'
const filderName = '#user'
const fillEmail = '#email'
const fillPassword = '#password'
//Assim;
//const elements = {
       //buttons: {
        // register: '#btnRegister'
       //}
      //fields: {
        // name: '#user,'
        // email: '#email',
        //  password: '#password',
      //}
       // messages: {
       // error: '.erroLabel'
       // sucessTitle: '#swal2-tittle',
        //sucessSubtitle: '#swal2-htmal-container'

     // }
//}

//Ações/métodos/funções

Cypress.Commands.add('saveRegister', () => {
    cy.get(botaoCadastrar)
       .click()
})
//recebe paramentro email
Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
      .should('be.visible')
      .type(email)
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
      .type(name)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
    .type(password)
})
//mensagem invalida
Cypress.Commands.add('checkMessage', (message) => {
    cy.get('.errorlabel')
      .should('contain', message)

})
Cypress.Commands.add('checkRegisterSuccess', (name) => {
    cy.get('#swal2-title', { timeout: 3000 })
     .should('have.text', 'Cadastro realizado!')

    cy.get('#swal2-html-container', { timeout: 3000 })
        .should('have.text', 'Bem-vindo Pollyana')
})