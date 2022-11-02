$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "  As a user, I want to login in Swag Labs web.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "LOGOUT001 - User want to logout from website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LOGOUT001"
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
});