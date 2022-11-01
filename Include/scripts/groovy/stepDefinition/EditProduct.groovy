package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

import internal.GlobalVariable

public class EditProduct {
	@Then("User click on daftar jual icon")
	public void user_click_on_daftar_jual_icon() {
		WebUI.callTestCase(findTestCase('Pages/AddProduct/Click Icon Daftar Jual'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click on product image")
	public void user_click_on_product_image() {
		WebUI.callTestCase(findTestCase('Pages/DaftarJual/click product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click on edit button on product page")
	public void user_click_on_edit_button_on_product_page() {
		WebUI.callTestCase(findTestCase('Pages/ProductPage(ID)/Click Edit Button'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User clear text in nama product field")
	public void user_clear_text_in_nama_product_field() {
	}

	@Then("User input text in nama product field")
	public void user_input_text_in_nama_product_field() {
		WebUI.callTestCase(findTestCase('Pages/EditProduct/Input Nama Produk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User click on terbitkan button")
	public void user_click_on_terbitkan_button() {
		WebUI.callTestCase(findTestCase('Pages/EditProduct/Click Terbitkan'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User clear text in harga product field")
	public void user_clear_text_in_harga_product_field() {
	}

	@Then("User input text in harga product field")
	public void user_input_text_in_harga_product_field() {
		WebUI.callTestCase(findTestCase('Pages/EditProduct/Input Harga Product'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
