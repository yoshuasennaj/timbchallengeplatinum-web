$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Preview.feature");
formatter.feature({
  "name": "Preview",
  "description": "  User wants to see preview before publishing new product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Preview"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "PREVIEW001 - Seller preview new product with complete information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Preview"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@PREVIEW001"
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
  "name": "User input email \"asadulhaq.ali@hotmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password \"test12345\"",
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
  "name": "User click +Jual button",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Jual_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Produk \"Tamiya Lightning-Magnum\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Nama_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Harga Produk \"300000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Harga_Produk(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select Kategori \"Hoby\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_select_Kategori(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Deskripsi \"Tamiya ori\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_input_Deskripsi(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload Foto Produk",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_upload_Foto_Produk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Preview",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_click_Preview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify new product \"Tamiya Lightning-Magnum\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Sell.user_verify_new_product(String)"
});
formatter.result({
  "status": "passed"
});
});