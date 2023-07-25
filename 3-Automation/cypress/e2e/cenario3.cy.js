/// <reference types="Cypress" />

describe('Testes no site Sauce Demo', () => {
    beforeEach('Acessar o site', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('input[placeholder="Username"]').type('standard_user')
      cy.get('input[placeholder="Password"]').type('secret_sauce')
      cy.get('input[id="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('Cenário III: Verificar o produto com menor e maior valor e adicioná-los ao carrinho', () => {
      // Coletar informações dos produtos
      const products = []
      cy.get('.inventory_item').each(($product) => {
        const name = $product.find('.inventory_item_name').text()
        const price = $product.find('.inventory_item_price').text().replace(/\$/g, '').trim()
        const addToCartButton = $product.find('.btn_inventory').text()
        products.push({ name, price: parseFloat(price), addToCartButton })
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
  
        // Adicionar o produto com menor valor ao carrinho
        cy.contains(minProduct.addToCartButton).click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
  
        // Adicionar o produto com maior valor ao carrinho
        cy.contains(maxProduct.addToCartButton).click()
        cy.get('.shopping_cart_badge').should('have.text', '2')
  
        // Verificar se os produtos estão no carrinho
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html')

        // Verificar informações completas dos produtos no checkout
        cy.get('.cart_item').each(($item, index) => {
          const itemName = $item.find('.inventory_item_name').text()
          const itemPrice = $item.find('.inventory_item_price').text().replace(/\$/g, '').trim()
          cy.log(`Produto ${index + 1}: ${itemName} - $${itemPrice}`)
        })
  
        // Seguir para Checkout
        cy.get('button[id="checkout"]').click()
        cy.url().should('include', '/checkout-step-one.html')

        //Informações de Checkout
        cy.get('input[id="first-name"]').type('Teste')
        cy.get('input[id="last-name"]').type('Teste')
        cy.get('input[id="postal-code"]').type('00000-000')
        cy.get('input[id="continue"]').click()

        // Finalizar compra
        cy.url().should('include', '/checkout-step-two.html')
        cy.get('button[id="finish"]').click()

        // Verificar mensagem de compra finalizada
        cy.url().should('include', '/checkout-complete.html')
        cy.contains('.complete-header', 'Thank you for your order')

      })
    })
  })
  