$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Register.feature");
formatter.feature({
  "name": "Registrasi",
  "description": "// Ageng",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Registrasi"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "REGIS001 - User want to register with account registered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registrasi"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@REGIS001"
    }
  ]
});
formatter.step({
  "name": "User click link masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click link daftar disini",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_daftar_disini()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input nama registered \"ageng\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email registered \"agengjobb@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_email_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password registered \"Cobain23\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_password_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_button_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "REGIS002 - User want to register without nama",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registrasi"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@REGIS002"
    }
  ]
});
formatter.step({
  "name": "User click link masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click link daftar disini",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_daftar_disini()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email registered \"agengjobb@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_email_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password registered \"Cobain23\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_password_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_button_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "REGIS003 - User want to register without email address",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registrasi"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@REGIS003"
    }
  ]
});
formatter.step({
  "name": "User click link masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click link daftar disini",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_daftar_disini()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input nama registered \"ageng\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password registered \"Cobain23\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_password_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_button_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "REGIS004 - User want to register without password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registrasi"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@REGIS004"
    }
  ]
});
formatter.step({
  "name": "User click link masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click link daftar disini",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_daftar_disini()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input nama registered \"ageng\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input email registered \"agengjobb@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_email_registered(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_button_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "REGIS005 - User want to register without email \u0026 password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Registrasi"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@REGIS005"
    }
  ]
});
formatter.step({
  "name": "User click link masuk",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click link daftar disini",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_link_daftar_disini()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input nama registered \"ageng\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button daftar",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_click_button_daftar()"
});
formatter.result({
  "status": "passed"
});
});