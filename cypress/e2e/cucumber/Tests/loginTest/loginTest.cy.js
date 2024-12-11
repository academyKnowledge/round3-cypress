import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../../../support/PageObjects/login/actions.cy";
import sharedAssertions from "../../../../support/PageObjects/shared/assertions.cy";

const loginAction = new loginActions();
const sharedAssertion = new sharedAssertions()

const myEmail = "CypressUser@gmail.com"; 
const myPassword = "test@123";
const pageTitleValue = "My Account";

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