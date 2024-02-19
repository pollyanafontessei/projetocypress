describe('Login',()=>{

    it('Login com sucesso',()=> {
       //get()selecionar elementos
         cy.visit('/')
         .get('.header-logo').as('@cabecalho')
         //contains() para encontrar elementos por texto onde diminuimos o escopo com get
         cy.get('#top_header')
            .contains('Login')
            //find() serve para encontrar elementos diminuimos o escopo com get
            cy. get('#top_header')
                .find('.fa-user')
                //as()-alias serve para criar apelidos(atalho)para grandes comandos
                cy.get('@cabecalho')
                .find('.fa-user')


    })

})