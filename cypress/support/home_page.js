//Também podemos fazer com javascript, tem que importar para o testes.
//metodo de criar page

export defautl{
     acessRegisterPage(){
       //Acessou a aplicação
     cy.visit('/')
     .get('.header-logo')
 //entrou no registro
 cy.get('.fa-lock')
     .click()
      //Verfica se está na página de cadastro
      cy.get('#user')
      .should('be.visible') 
     } 
}