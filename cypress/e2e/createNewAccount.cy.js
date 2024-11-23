/// <reference types="cypress" />
describe('Check create new account form in magento website', () => {
    
    it('verify that all fields are visible in create new account form', () => {
        
        cy.visit("/customer/account/create/");

        cy.get(".page-title").should("be.visible");
        cy.contains("span","Personal Information").should("be.visible");
        cy.contains("span","Sign-in Information").should("be.visible");
       
        cy.get("[for=firstname]").should("be.visible");
        cy.get("[for=lastname]").should("be.visible");
        cy.get("[for=email_address]").should("be.visible");
        cy.get("[for=password]").should("be.visible");
        cy.get("[for=password-confirmation]").should("be.visible");

        cy.get("#password-strength-meter").should("be.visible")
        .and("contain","Password Strength")

        cy.get("button").contains("Create an Account").should("be.visible");

        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");

        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")
    });

    it.only('Validate that the user can create a new account', () => {
        cy.visit("/customer/account/create/");
        //  Math.random() // 0-8  ,  0.1 , 0.43 0.7777 
        const emailNum = Math.floor(Math.random()*1000); // 0 - 999 

        cy.get("#firstname").type("Razan")
        cy.get("#lastname").type("Balatiah")
        cy.get("#email_address").type("razanbalatiah"+emailNum+"@gmail.com") 
        //razanbalatiah986@gmail.com
        cy.get("#password").type("test@123")
        cy.get("#password-confirmation").type("test@123")
        cy.contains("button","Create an Account").click(); 
        cy.wait(1000)
        cy.get("[role=alert]").should("be.visible").and("contain","Thank you for registering with Main Website Store")
        cy.get(".page-title").should("contain","My Account")
        cy.get(".logged-in").first().should("contain","Welcome, Razan Balatiah!")
        cy.url().should('eq','https://magento.softwaretestingboard.com/customer/account/')
    });
});