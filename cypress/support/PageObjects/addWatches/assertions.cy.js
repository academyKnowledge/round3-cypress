class addWatchesAssertions{

    checkCartIsContain(cartCounter){
        cy.get(".qty").should('contain',cartCounter)
        return this;
    }
}
export default addWatchesAssertions;