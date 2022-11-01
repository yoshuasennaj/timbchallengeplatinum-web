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


// Riswanda
class Search {
	@Then("User Login")
	public void user_login() {
		WebUI.callTestCase(findStepDefinition('FeatureLogin/Test Cases/StepDefinition/Feature Login/LOGIN001- Login With Valid Email and Password'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User Verify Hamburger Menu")
	public void user_verify_hamburger_menu() {
		WebUI.verifyElementVisible(findTestObject('Pages/InterestedProduct/Verify Content HamburgerMenu'),[:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User Click Hamburger Menu")
	public void user_click_hamburger_menu() {
		WebUI.callTestCase(findTestObject('Pages/InterestedProduct/Click Hamburger Menu'),[:], FailureHandling.STOP_ON_FAILURE)
	}
	
	@Then("User Click Interested Product")
	public void user_click_category_interested() {
		WebUI.callTestCase(findTestObject('Pages/InterestedProduct/Click Interested Product Category'),[:], FailureHandling.STOP_ON_FAILURE)
	}
	
	@Then("User Verify Interested Product Category")
	public void user_verify_interested_product_category() {
		WebUI.verifyElementVisible(findTestObject('Pages/InterestedProduct/Verify Content Interested Product Category'),[:], FailureHandling.STOP_ON_FAILURE)
	}

}