Feature: Create a board in trello

    Scenario: Create new board
        Given The user login to trello website
        When Clicks on create button in navbar
        And Choose create board option
        And Types board name in board title field
        And Clicks on create button
        Then The board should be created successfully