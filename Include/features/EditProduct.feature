@Editproduct @Smoke
Feature: Edit Product
  As a user, I want to change detail product info in SECONDHAND web.
  
  //ida

@EDITPRODUCT001
  Scenario: EDITPRODUCT001 - User want to change product name
    Then User click on button masuk
    Then User input email "binarqae1@gmail.com"
    Then User input password "students1234"
    Then User click on login button
    Then User click on daftar jual icon
    Then User click on product image
    Then User click on edit button on product page
    Then User clear text in nama product field
    Then User input text in nama product field
    And User click on terbitkan button
    

  @EDITPRODUCT002
  Scenario: EDITPRODUCT001 - User want to change product name
    Then User click on daftar jual icon
    Then User click on product image
    Then User click on edit button on product page
    Then User clear text in harga product field
    Then User input text in harga product field
    And User click on terbitkan button