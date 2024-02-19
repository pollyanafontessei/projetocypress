
/// <reference types= "cypress" />
import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {
        //Acessando a Tela de Cadastro de Usuário
        cy.accessRegisterPage()
    })
    it('Validar campo nome vazio', () => {
        //clicou no botão cadastrar
        cy.get('#btnRegister')
         .click()

        //verficou a mensagem
        cy.get('.errorLabel')
            .should('contain', 'O campo nome deve ser prenchido')

    })

    it('Validar campo e-mail inválido', () => {

        cy.get('#user')
            .should('be.visible')
        //Quando preencho os dados nome e senha validos
        cy.get('#user')
            .type('pollyana')
        // e campo senha vazio
        cy.get('#email').clear()
        cy.get('#password')
            .type('123456')
        //Quando clico em cadastrar
        cy.get('#btnRegister')
            .click()
        // Então devo ver a mensagem:'O campo e-mail deve ser prenchido corretamente'
        cy.get('.errorLabel')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo senha inválido', () => {
        //Dado que eu esteja na tela principal da QAZAndo
        cy.get('#user')
            .should('be.visible')
        //Quando preencho os dados nome e
        cy.get('#user')
            .type('Pollyana')
        // e-mail validos
        cy.get('#email')
            .type('pollysfontesseixas@gmail.com')
        //E campo senha vazio

        //Quando clico em cadastrar
        cy.get('#btnRegister')
            .click()

        // Então devo ver a mensagem:O campo senha deve ter pelo menos 6 dígitos
        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com sucesso', () => {
        //Dado que eu esteja na tela principal da QAZAndo
        //E que seja acessado a tela de cadastro
        cy.get('#user')
            .should('be.visible')
        //Quando preencho os dados nome
        cy.get('#user')
            .type('Pollyana')
        //E-mail e
        cy.get('#email')
            .type('pollysfontesseixas@gmail.com')
        //E senha validos
        cy.get('#password')
            .type('123456')
        //Quando clico em cadastrar
        cy.get('#btnRegister')
        .click()

        //Então apresenta a mensagem: Bem vindo pollysfontes - Cadastro realizado com sucesso!
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('have.text', 'Bem-vindo Pollyana')
    })
})

