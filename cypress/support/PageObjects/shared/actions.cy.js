class sharedActions {
    openMagentoWebsite(){
        cy.visit("/")
        return this;
    }
}
export default sharedActions;