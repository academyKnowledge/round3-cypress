/// <reference types="cypress" />
import { Given, Then} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/PageObjects/shared/actions.cy";
import addWatchesActions from "../../../../support/PageObjects/addWatches/actions.cy";
import addWatchesAssertions from "../../../../support/PageObjects/addWatches/assertions.cy";

let cartCounter = 0 ; 
const sharedAction = new sharedActions();
const addWatchesAction = new addWatchesActions();
const addWatchesAssertion = new addWatchesAssertions();

Given("The user navigate to magento website",()=>{
    sharedAction.openMagentoWebsite();
});

When("Click on Gear menu and choose watches option",()=>{
    addWatchesAction.clickOnGearMenu().chooseWatchesOptionFromGearMenu()
    .clickOnListModeOption();
})  

When("Add all watches with price > 55 to cart",()=>{
    cy.get(".product-items").first().find("li .price").then((prices)=>{
        for (let i = 0; i < prices.length; i++) {
            cy.wrap(prices[i]).invoke('text').then((productPrice)=>{
                let price = productPrice.replace("$",''); /// 92.00 
                let finalPrice = parseInt(price);   // 92 
                if(finalPrice > 55){
                    cy.wrap(prices[i]).parents(".price-box").next().find("button.tocart")
                    .click({force:true})
                    cy.wait(1500)
                    cartCounter++
                }
            })
        }
        
    })
});

Then("The cart should contain the correct numbers of watches",()=>{
    addWatchesAssertion.checkCartIsContain(cartCounter)  
})