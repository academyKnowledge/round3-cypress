class loginActions {
    openLoginPage(){
        cy.visit("/customer/account/login/") 
        return this;
    }

    typeInEmailInputField(email){
        cy.get("#email").type(email)
        return this; 
    }

    typeInPasswordInputField(password){
        cy.get("#pass").type(password) 
        return this;
    }

    clickOnSignInButton(){
        cy.get("#send2").click()
        return this;
    }
}
export default loginActions;