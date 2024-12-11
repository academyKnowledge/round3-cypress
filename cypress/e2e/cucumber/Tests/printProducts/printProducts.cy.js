/// <reference types="cypress" />
import { Given, Then} from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to magento website",()=>{
    cy.visit("/");
});


Then("The products in hot seller section are available",()=>{
    cy.get(".product-item-name a").then((products)=>{
        for (let i = 0; i < products.length; i++) {

            cy.wrap(products[i]).invoke('text').then((productName)=>{
                cy.log(productName)
        })
    }
})
})