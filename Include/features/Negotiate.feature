@Negotiate
Feature: Negotiate
//aufar	
	
@OFFERING001
Scenario: OFFERING001 - User wants to enter bid according to price
Given User on home page
Then User click product raket badminton
Then User click saya_tertarik_dan_ingin_nego button
Then User input correct price 30000
Then User click kirim button

@OFFERING002
Scenario: OFFERING002 - User wants to enter a bid above the listed price
Given User on home page
Then User click product raket badminton
Then User click saya_tertarik_dan_ingin_nego button
Then User input incorrect price above 50000
Then User click kirim button
		
@OFFERING003
Scenario: OFFERING003 - User wants to enter a bid price without input price
Given User on home page
Then User click product raket badminton
Then User click saya_tertarik_dan_ingin_nego button
Then User click kirim button
	
@OFFERING004	
Scenario: OFFERING004 - User wants to enter bid price below 1000 
Given User on home page
Then User click product raket badminton
Then User click saya_tertarik_dan_ingin_nego button
Then User input incorrect price below 999
Then User click kirim button