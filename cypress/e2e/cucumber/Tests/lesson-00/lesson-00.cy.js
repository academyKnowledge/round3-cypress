/// <reference types="cypress" />
import { Before, After ,  Given, When , Then} from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/PageObjects/shared/actions.cy";
import addWatchesActions from "../../../../support/PageObjects/addWatches/actions.cy";
import addWatchesAssertions from "../../../../support/PageObjects/addWatches/assertions.cy";
import loginActions from "../../../../support/PageObjects/login/actions.cy";
import sharedAssertions from "../../../../support/PageObjects/shared/assertions.cy";

const loginAction = new loginActions();
const sharedAssertion = new sharedAssertions()

const myEmail = "CypressUser@gmail.com"; 
const myPassword = "test@123";
const pageTitleValue = "My Account";

let cartCounter = 0 ; 
const sharedAction = new sharedActions();
const addWatchesAction = new addWatchesActions();
const addWatchesAssertion = new addWatchesAssertions();

// Before(()=>{
//     cy.log("This is Before") 
//  })

// Before({tags:"@TC-2"},()=>{
//     cy.log("This is Before") 
//  })

// Before({tags:"@TC-2 or @TC-3"},()=>{
//    cy.log("This is Before") 
// })

// Before({tags:"@TC-2 and @myTest"},()=>{
//     cy.log("This is Before") 
// })

Given("The user navigate to magento website",()=>{
    sharedAction.openMagentoWebsite();
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

When("Click on Gear menu and choose watches option",()=>{
    addWatchesAction.clickOnGearMenu().chooseWatchesOptionFromGearMenu()
    .clickOnListModeOption();
})  

When("Add all watches with price > {int} to cart",(value)=>{
    cy.get(".product-items").first().find("li .price").then((prices)=>{
        for (let i = 0; i < prices.length; i++) {
            cy.wrap(prices[i]).invoke('text').then((productPrice)=>{
                let price = productPrice.replace("$",''); /// 92.00 
                let finalPrice = parseInt(price);   // 92 
                if(finalPrice > value){
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

Given("The user navigate to sign in page in magento website",()=>{
    loginAction.openLoginPage();
})

When("The user types email in email input field",()=>{
    loginAction.typeInEmailInputField(myEmail)
})

When("The user types password in password input field",()=>{
    loginAction.typeInPasswordInputField(myPassword)
})

When("The user clicks on sign in button",()=>{
    loginAction.clickOnSignInButton()
})

Then("The user will redirected to My Account page",()=>{
    sharedAssertion.checkPageTitleIsContain(pageTitleValue);
})

When("User Types {string} in search bar",(value)=>{
    cy.get("#search").type(value+"{enter}");
})

When("User Clicks on the {string}",(productName)=>{
    cy.contains("a",productName).click();  
})
When("User Clicks on Add to compare button",()=>{
    cy.wait(1500)
    cy.get(".product-addto-links").find("a").last().click()
})
Then("A message You added product {string} to the comparison list should shown",(message)=>{
    cy.wait(1500)
    sharedAssertion.checkMeassageBarIsContain(message)  
})


// After(()=>{
//     // deletion 
// })