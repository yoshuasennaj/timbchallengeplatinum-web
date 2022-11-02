$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/EditProduct.feature");
formatter.feature({
  "name": "Edit Product",
  "description": "  As a user, I want to change detail product info in SECONDHAND web.\n  \n  //ida",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Editproduct"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "EDITPRODUCT001 - User want to change product name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Editproduct"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@EDITPRODUCT001"
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
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on product image",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_product_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on edit button on product page",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_edit_button_on_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear text in nama product field",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_clear_text_in_nama_product_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input text in nama product field",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_input_text_in_nama_product_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_click_on_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "EDITPRODUCT001 - User want to change product name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Editproduct"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@EDITPRODUCT002"
    }
  ]
});
formatter.step({
  "name": "User click on daftar jual icon",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_daftar_jual_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on product image",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_product_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on edit button on product page",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_click_on_edit_button_on_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clear text in harga product field",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_clear_text_in_harga_product_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input text in harga product field",
  "keyword": "Then "
});
formatter.match({
  "location": "EditProduct.user_input_text_in_harga_product_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on terbitkan button",
  "keyword": "And "
});
formatter.match({
  "location": "EditProduct.user_click_on_terbitkan_button()"
});
formatter.result({
  "status": "passed"
});
});