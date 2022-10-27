@Search @Smoke
Feature: Search

	@SEARCHCATEGORY001
	Scenario: SEARCHCATEGORY001 - SEARCH CATEGORY Semua
	Then 
		Then User click semua button
		Then User verify content donut
		Then User verify content tesla
	
	@SEARCHCATEGORY002
	Scenario: SEARCHCATEGORY002 - SEARCH CATEGORY Hoby
		Then User click hoby button
		Then User verify content product donut
		Then User verify content product rtx
	
	@SEARCHCATEGORY003
	Scenario: SEARCHCATEGORY003 - SEARCH CATEGORY Kendaraan
		Then User click hoby button
		Then User verify content product tesla
		Then User verify content product hyundai
	
	@SEARCHCATEGORY004
	Scenario: SEARCHCATEGORY004 - SEARCH CATEGORY Baju
		Then User click baju button
		Then User verify content product gucci
		Then User verify content product handuk
	
	@SEARCHCATEGORY005
	Scenario: SEARCHCATEGORY005 - SEARCH CATEGORY Elektronik
		Then User click elektronik button
		Then User verify content product iphone14
		Then User verify content product realme
	
	@SEARCHCATEGORY006
	Scenario: SEARCHCATEGORY006 - SEARCH CATEGORY Kesehatan
		Then User click kesehatan button
		Then User verify content product susu
		Then User verify content product vaseline
	