Feature: Check login functionality

    Scenario: Validate that the user can login successfully
        Given The user navigate to sign in page in magento website
        When The user types email in email input field
        And The user types password in password input field
        And The user clicks on sign in button
        Then The user will redirected to My Account page