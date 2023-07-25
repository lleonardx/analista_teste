/// <reference types="cypress" />

describe('Testes no site Sauce Demo', () => {
    beforeEach('Acessar o site', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('input[placeholder="Username"]').type('standard_user')
      cy.get('input[placeholder="Password"]').type('secret_sauce')
      cy.get('input[id="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })

    it('Cenário II: Verificar o produto com menor e maior valor', () => {
        // Coletar informações dos produtos
        const products = []
        cy.get('.inventory_item').each(($product) => {
          const name = $product.find('.inventory_item_name').text()
          const price = $product.find('.inventory_item_price').text().replace(/\$/g, '').trim()
          products.push({ name, price: parseFloat(price) })
        }).then(() => {
          // Encontrar o produto com menor valor
          let minProduct = products[0]
          products.forEach((product) => {
            if (product.price < minProduct.price) {
              minProduct = product
            }
          })
    
          // Encontrar o produto com maior valor
          let maxProduct = products[0]
          products.forEach((product) => {
            if (product.price > maxProduct.price) {
              maxProduct = product
            }
          })
    
          // Exibir informações dos produtos com menor e maior valor
          cy.log(`Produto com menor valor: ${minProduct.name} - $${minProduct.price.toFixed(2)}`)
          cy.log(`Produto com maior valor: ${maxProduct.name} - $${maxProduct.price.toFixed(2)}`)
        })
      })
    })