$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Negotiate.feature");
formatter.feature({
  "name": "Negotiate",
  "description": "  //aufar",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Negotiate"
    }
  ]
});
formatter.scenario({
  "name": "OFFERING001 - User wants to enter bid according to price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negotiate"
    },
    {
      "name": "@OFFERING001"
    }
  ]
});
formatter.step({
  "name": "User click on button masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email \"binarqae1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify image on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click product raket badminton",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_product_raket_badminton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click saya_tertarik_dan_ingin_nego button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input correct price 30000",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_input_correct_price(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click kirim button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFFERING002 - User wants to enter a bid above the listed price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negotiate"
    },
    {
      "name": "@OFFERING002"
    }
  ]
});
formatter.step({
  "name": "User click home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click product raket badminton",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_product_raket_badminton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click saya_tertarik_dan_ingin_nego button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input incorrect price above 50000",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_input_incorrect_price_above(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click kirim button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFFERING003 - User wants to enter a bid price without input price",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negotiate"
    },
    {
      "name": "@OFFERING003"
    }
  ]
});
formatter.step({
  "name": "User click home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click product raket badminton",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_product_raket_badminton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click saya_tertarik_dan_ingin_nego button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click kirim button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click x button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_x_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "OFFERING004 - User wants to enter bid price below 1000",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Negotiate"
    },
    {
      "name": "@OFFERING004"
    }
  ]
});
formatter.step({
  "name": "User click home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click product raket badminton",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_product_raket_badminton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click saya_tertarik_dan_ingin_nego button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_saya_tertarik_dan_ingin_nego_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input incorrect price below 999",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_input_incorrect_price_below(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click kirim button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click x button",
  "keyword": "Then "
});
formatter.match({
  "location": "Negotiate.user_click_x_button()"
});
formatter.result({
  "status": "passed"
});
});