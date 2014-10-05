Feature: FKT testing in PRODUCTON	
In order to check whether all capabilities are working or not
I want to add DPSI 

Scenario: Check FTK capabilites
Given I go to "LoginURl" on "Mozilla"
When click on "Addaccount"
Then I enter "username" as "adminuser"
Then I enter "password" as "adminpass"
And clickon "signin"
And Sign in is "button"



#When click on "template"
#Then search for "myjobs"
#And click on "srctemp"
#Then job should be "success"