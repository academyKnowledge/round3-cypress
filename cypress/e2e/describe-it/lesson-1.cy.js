/// <reference types ="cypress" />

// describe - it 
// BDD - cucumber - gherkin language 

// comment 
/** this is comment */

/**
 * 1- open login page 
 * 2- Enter valid email
 * 3- Enter valid Password 
 * 4- click on login button 
 * 5- the user should be redirected to my account page 
 */
describe("Lesson1",()=>{
    it('Validate that the user can login successfully in magento website', () => {
        cy.visit("/customer/account/login/");
        cy.get("#email").type("CypressUser@gmail.com") 
        cy.get("#pass").type("frf");
        cy.get("#send2").click()
        cy.get(".page-title").should("contain","My Account")
    });

    it('Lesson2', () => {
        cy.visit("/");
        // cy.get("#search");
        // cy.get(".input-text")
        // cy.get("button")
        // cy.get("*")
        // cy.get(".showcart")
        // cy.get("a.showcart")
        // cy.get(".intro")
        // cy.get("[role=presentation]")  

    });

    it.only('css-selectors', () => {
        cy.visit("/")
        cy.get(".nav-1 > a > span")
        cy.get(".authorization-link a").first().click() // Sign in link 
        cy.get("[aria-label='store logo']")
        cy.get(".page-footer div.links li").first()
    });
});