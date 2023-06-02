Feature: Performing the logins

    Background:
        Given I'm on the login page

    Scenario: Login with super admin user
        When I log in with email sadmin@vms.com password 1234qwer
        Then I should be on the dashboard page