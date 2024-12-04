/// <reference types="cypress" />
describe('Add to compare functionality', () => {
    it('Add to compare', () => {
        cy.visit("/")
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".product-addto-links").find("a").last().click()
        cy.get("[role=alert]").should("be.visible").and("contain","You added product Circe Hooded Ice Fleece to the comparison list.")
    });
    
})