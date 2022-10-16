Feature: Login
  As a user, I want to login in Swag Labs web.

  Scenario: LGI001 - User want to login without input username and password
    Then User click on LOGIN button

  Scenario: LGI002 - User want to login only input registered username
    Then User input registered username only "standard_user"
    Then User click on LOGIN button

  Scenario: LGI003 - User want to login only input registered password
    Then User input registered password only "secret_sauce"
    Then User click on LOGIN button

  Scenario: LGI004 - User want to login using incorrect credential
    Then User input incorrect username "xxxxxxxx"
    Then User input incorrect password "xxxxxxxx"
    Then User click on LOGIN button

  Scenario: LGI005 - User want to login using correct credential
    Then User input registered username "standard_user"
    Then User input registered password "secret_sauce"
    Then User click on LOGIN button
