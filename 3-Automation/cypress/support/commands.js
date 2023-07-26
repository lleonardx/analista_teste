/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// -=Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('login', (username, password) => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[placeholder="Username"]').type(username, { log: false })
        cy.get('input[placeholder="Password"]').type(password, { log: false })
        cy.get('input[id="login-button"]').click()
        //cy.url().should('contain', '/login-successful')
  })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })