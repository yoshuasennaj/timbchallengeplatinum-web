@Logout @Smoke

Feature: Logout
  As a user, I want to login in Swag Labs web.

	@LOGOUT001
  Scenario: LOGOUT001 - User want to logout from website
  	Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then Verify image on homepage
    Then User click profile menu
    And User click Logout

