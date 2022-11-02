$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user, I want to login in SECONDHAND web.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "LOGIN001 - User want to login with valid email and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LOGIN001"
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
  "keyword": "Then "
});
formatter.match({
  "location": "Login.verify_image_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click profile menu",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_profile_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Logout",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LOGIN002 - User want to login with valid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LOGIN002"
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
  "name": "User input password \"students123\"",
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
  "name": "Error message password will display",
  "keyword": "And "
});
formatter.match({
  "location": "Login.error_message_password_will_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User back to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_back_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LOGIN003 - User want to login with invalid email and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LOGIN003"
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
  "name": "User input email \"binarqe1@gmail.com\"",
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
  "name": "Error message email will display",
  "keyword": "And "
});
formatter.match({
  "location": "Login.error_message_email_will_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User back to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_back_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LOGIN004 - User want to login with invalid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LOGIN004"
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
  "name": "User input email \"binarqe1@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"students123\"",
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
  "name": "User back to Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_back_to_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LOGIN005 - User want to login without fill in email and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LOGIN005"
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
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
});