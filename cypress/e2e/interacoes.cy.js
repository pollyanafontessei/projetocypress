/// <reference types="cypress"/>

describe('Interações', () => {

  it('Digitar em um campo', () => {
    cy.visit('/')
      .get('.header-logo')

    cy.get('.form-control')
      .type('pollysfontesseixas@gmail.com')
  })
  //para prencher captura coloca type passando o texto desejado
  it('Click', () => {
    cy.visit('/')
      .get('.header-logo')

    cy.get('.fa-user')
      .click()
    //click normal
    //click duplo .dbclick
    //.rigthclick
    //click por cordenada .click(110,110,{force:true}) 
    // simular apertar enter
    //cy.get('.form-control')
    //.type('pollysfontesseixas@gmail.com{enter}')



  })

  it('Select', () => {
    cy.visit('/')
      .get('.header-logo')

      cy.get('.footer_one_widget')
       .contains('Checkout View Two')
        .click()
        cy.get('#country')
        .select('Colombia')

    

  })

  it.only('Checkbox e radio button', () => {
    cy.visit('/')
      .get('.header-logo')

      cy.get('.footer_one_widget')
       .contains('Checkout View One')
        .click()

      cy.get('#materialUnchecked')
       .check()
       .uncheck()
       //check marca o checkbox e uncheck desmarca serve somente para checkbox
       cy.get('#css')
       .check() //radio button escolhe somente uma opção não tem uncheck


  })


})









