import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to sign in page in magento website",()=>{
    cy.visit("/customer/account/login/")
})

When("The user types email in email input field",()=>{
    cy.get("#email").type("CypressUser@gmail.com") 
})

When("The user types password in password input field",()=>{
    cy.get("#pass").type("test@123") 
})

When("The user clicks on sign in button",()=>{
    cy.get("#send2").click()
})

Then("The user will redirected to My Account page",()=>{
    cy.get(".page-title").should("contain","My Account")
})