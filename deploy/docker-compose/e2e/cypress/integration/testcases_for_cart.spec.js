describe ('My Integration tests',function(){
    it('We have correct page title',function(){
      cy.visit('http://front-end:8079')
      cy.title().should('eq', 'WeaveSocks');
    })
    it('it clicks on colourful category',function(){
      cy.get(':nth-child(2) > .item > .product > .text > h3 > a').should("have.text", "Colourful");
      cy.get(':nth-child(2) > .item > .product > .text > h3 > a').click();
    })
    it('Putting the products into cart and checking cart values',function(){
      cy.get('#imageMain').should("be.visible");
      cy.get('#buttonCart').click();
      cy.get('#numItemsInCart').should("have.text", "1 item(s) in cart").log('cart value matched');
      cy.get('#buttonCart').click();
      cy.get('#numItemsInCart').should("have.text", "2 item(s) in cart").log('cart value updated to 2');
    })
    })
  
