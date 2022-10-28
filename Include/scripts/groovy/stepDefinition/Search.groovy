package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class Search {
	@Then("User click semua button")
	public void user_click_semua_button() {
		WebUI.callTestCase(findTestCase('Pages/SearchCategory/Category Semua'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User verify content donut")
	public void user_verify_content_donut() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_donut'))
	}

	@Then("User verify content tesla")
	public void user_verify_content_tesla() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_tesla'))
	}

	@Then("User click hoby button")
	public void user_click_hoby_button() {
		WebUI.callTestCase(findTestCase('Pages/SearchCategory/Category Hoby'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User verify content product donut")
	public void user_verify_content_product_donut() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_donut'))
	}

	@Then("User verify content product rtx")
	public void user_verify_content_product_rtx() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_rtx'))
	}

	@Then("User verify content product tesla")
	public void user_verify_content_product_tesla() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_tesla'))
	}

	@Then("User verify content product hyundai")
	public void user_verify_content_product_hyundai() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_hyundai'))
	}

	@Then("User click baju button")
	public void user_click_baju_button() {
		WebUI.callTestCase(findTestCase('Pages/SearchCategory/Category Baju'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User verify content product gucci")
	public void user_verify_content_product_gucci() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_gucci'))
	}

	@Then("User verify content product handuk")
	public void user_verify_content_product_handuk() {
		WebUI.verifyElementVisible(findTestObject('Page_Search/product_handuk'))
	}

	@Then("User click elektronik button")
	public void user_click_elektronik_button() {
		WebUI.callTestCase(findTestCase('Pages/SearchCategory/Category Elektronik'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
