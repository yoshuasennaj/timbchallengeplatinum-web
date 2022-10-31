@Negotiate
Feature: Negotiate
  //aufar

  @OFFERING001
  Scenario: OFFERING001 - User wants to enter bid according to price
    Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    And Verify image on homepage
    Then User click product raket badminton
    Then User click saya_tertarik_dan_ingin_nego button
    Then User input correct price 30000
    Then User click kirim button

  @OFFERING002
  Scenario: OFFERING002 - User wants to enter a bid above the listed price
    Then User click home page
    Then User click product raket badminton
    Then User click saya_tertarik_dan_ingin_nego button
    Then User input incorrect price above 50000
    Then User click kirim button

  @OFFERING003
  Scenario: OFFERING003 - User wants to enter a bid price without input price
    Then User click home page
    Then User click product raket badminton
    Then User click saya_tertarik_dan_ingin_nego button
    Then User click kirim button
    Then User click x button

  @OFFERING004
  Scenario: OFFERING004 - User wants to enter bid price below 1000
    Then User click home page
    Then User click product raket badminton
    Then User click saya_tertarik_dan_ingin_nego button
    Then User input incorrect price below 999
    Then User click kirim button
    Then User click x button
