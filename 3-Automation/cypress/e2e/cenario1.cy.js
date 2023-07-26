/// <reference types="cypress" />

describe('Testes no site Sauce Demo', () => {
  beforeEach('Acessar o site', () => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Cenario I: Realizar Login com o usuario standard_user', () => {
    // Insere o nome de Usuario e Senha validos e clica no botao de Login
    cy.get('input[placeholder="Username"]')
    .type('standard_user', { log: false })

    cy.get('input[placeholder="Password"]')
    .type('secret_sauce', { log: false })

    cy.get('input[id="login-button"]').click()

    // Verifica se o login foi bem-sucedido acesssando a pagina de produtos
    cy.url().should('include', '/inventory.html')

    
  })

  it('Cenario II: Realizar Login com o usuario bloqueado "locked_out_user" ', () => {
    // Insere o nome de Usuario bloqueado e senha valida e clicar no botao de Login 
    cy.get('input[placeholder="Username"]')
    .type('locket_out_user', { log: false })

    cy.get('input[placeholder="Password"]')
    .type('secret_sauce', { log: false })

    cy.get('input[id="login-button"]').click()

    cy.get('.error-message-container')
      .should('be.visible')
      .should('have.text', 'Epic sadface: Username and password do not match any user in this service')

  })
  
})