/// <reference types="cypress" />

describe('Testes no site Sauce Demo', () => {
    beforeEach('Acessar o site', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.validLogin()
    })

    it('Cenário II: Verificar o produto com menor e maior valor', () => {
        // Coletar informações dos produtos
        cy.productsMinAndMax()
        
      })
    
})