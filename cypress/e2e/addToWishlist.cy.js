/// <reference types="cypress" />
describe('Add to wishlist functionality', () => {
    before(()=>{
        cy.visit("/customer/account/login/");
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click();
    })

    it('Add to wishlist', () => {
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".product-addto-links").find("a").first().click()
        cy.screenshot({capture:"fullPage"})
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece has been added to your Wish List. Click here to continue shopping")
    });
    
})