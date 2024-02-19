describe('Get Texts',()=>{

    it('Obter texto de um elemento',()=> {
         cy.visit('/')
         .get('.header-logo')
        
         cy.get('.top_header_left>p')
         .then((element)=>{
            element.text()
            console.log(element.text())
           // element.hide() hide esconde o elemento
            //busca elemento selecionado, a partir que estou com then estou com elemento e posso fazer algo com ele
         })


    })

})