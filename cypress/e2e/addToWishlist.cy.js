/// <reference types="cypress" />
describe('Add to wishlist functionality', () => {
    before(()=>{
        const email = "CypressUser@gmail.com";
        const pass = "test@123";
        cy.loginToMagento(email,pass)
        // cy.loginToMagento("CypressUser@gmail.com","test@123")
    
    })

    it('Add to wishlist', () => {
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".product-addto-links").find("a").first().click()
        cy.screenshot({capture:"fullPage"})
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece has been added to your Wish List. Click here to continue shopping")
    });
    
})