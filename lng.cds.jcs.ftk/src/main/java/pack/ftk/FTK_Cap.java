package pack.ftk;

import pack.util.webconnector;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


/*When click on "Addaccount"
Then I enter "username" as "adminuser"
Then I enter "password" as "adminpass"
And click on "signin"
*/

public class FTK_Cap 
{
	
	webconnector connector = new webconnector();
	@Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
	public void I_go_to_url(String URL, String browser)
	{
		System.out.println("@Given- I go to "+ URL +" on "+ browser);
		connector.openbrowser(browser);
		connector.navigate(URL);
	}
	@When("^click on \"([^\"]*)\"$")
	public void Addacct(String account)
	{
		System.out.println("@When - Add acount"+account );
		connector.accounts(account);
	}
	@Then("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void user_pass(String object, String text)
	{
		System.out.println("@Then enter "+ object+" as "+text);
		connector.senddetails(object, text);
	}
	@And("^clickon \"([^\"]*)\"$")
	public void sign_in(String object)
	{
		System.out.println("Sign_in "+object);
		connector.clicks(object);
	}
/*	
	
	
	@When("^click on \"([^\"]*)\"$")
	public void search_tempalte(String mytemp){
		System.out.println("@when Click on "+mytemp);
	}
	@Then("^search for \"([^\"]*)\"$")
	public void click_job(String myjob)
	{
		System.out.println("@Then Click on jobs "+myjob);
	}
	@And("^click on \"([^\"]*)\" $")
	public void click_template(String mytemp)
	{
		System.out.println("@And Click on jobs "+mytemp);
	}
	@Then("^job should be \"([^\"]*)\"$")
	public void isElementpresent(String success)
	{
		System.out.println("@Then job is "+success);
	}

*/

}
