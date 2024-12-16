class sharedAssertions {
    checkPageTitleIsContain(value){
        cy.get(".page-title").should("contain",value)
        return this;
    }

    checkMeassageBarIsContain(message){
        cy.get("[role=alert]").should("contain",message)
        return this;
    }
}
export default sharedAssertions;