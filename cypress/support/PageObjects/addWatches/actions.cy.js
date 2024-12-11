class addWatchesActions{
    clickOnGearMenu(){
        cy.contains("a","Gear").click()
        return this;
    }

    chooseWatchesOptionFromGearMenu(){
        cy.get("ol.items").contains("a","Watches").click().wait(1500)
        return this;
    }

    clickOnListModeOption(){
        cy.get("#mode-list").first().click();
        return this;
    }
}
export default addWatchesActions;