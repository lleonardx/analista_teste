/// <reference types="Cypress" />

describe('Testes no site Sauce Demo', () => {
    beforeEach('Acessar o site', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.validLogin()
    })
  
    it('Cenário III: Verificar o produto com menor e maior valor e adicioná-los ao carrinho', () => {
      // Coletar informações dos produtos
      cy.productsMinAndMaxAddCard()

    })
  })
  