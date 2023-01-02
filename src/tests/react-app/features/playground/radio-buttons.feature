Feature: As a user I can interact with radio buttons

    @smoke
    @regression
    Scenario: As a user I can interact and assert on radio buttons
        Given I am on the "home" page
        When I click the "playground" button
        Then the "playground header" should be displayed
        Then the "male radio button" should not be checked
        And the "female radio button" should be checked
        When I check the "male radio button"
        Then the "male radio button" should be checked
        Then the "female radio button" should not be checked
        When I check the "female radio button"
        Then the "female radio button" should be checked
        Then the "male radio button" should not be checked