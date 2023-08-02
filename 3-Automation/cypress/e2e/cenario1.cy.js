/// <reference types="cypress" />

describe('Testes no site Sauce Demo', () => {
  beforeEach('Acessar o site', () => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Cenario I: Realizar Login com o usuario standard_user', () => {
    cy.validLogin() // Insere o nome de Usuario e Senha validos e clica no botao de Login
    cy.url().should('include', '/inventory.html') // Verifica se o login foi bem-sucedido acesssando a pagina de produtos

  })

  it('Cenario II: Realizar Login com o usuario bloqueado "locked_out_user" ', () => {
    cy.invalidLogin() // Insere o nome de Usuario bloqueado e senha valida e clicar no botao de Login 
    cy.get('.error-message-container')
      .should('be.visible')
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service') // Verifica se o aparece mensagem de erro ao utilizar usuario invalido
  })
  
})