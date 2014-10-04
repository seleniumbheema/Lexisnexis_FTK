package pack.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;

public class webconnector {
	
//	 Intilization for properites file
	
	Properties OR = null;
	Properties CONFIG = null;
	WebDriver driver = null;
	
	public webconnector()
	{
		if(OR==null)
		{
			try {
				
					OR = new Properties();
					FileInputStream fs = new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\pack\\config\\OR.properties");
					OR.load(fs);
					System.out.println(OR.getProperty("testenv"));
					CONFIG = new Properties();
					fs= new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\pack\\config\\"+OR.getProperty("testenv")+"_config.properties");
					CONFIG.load(fs);
					System.out.println(CONFIG.getProperty("LoginURl"));
					
					
				}
			 catch (IOException e) 
			 {
					System.out.println("Intialization error");
			 }
		}
	}
	
	public void openbrowser(String browsertype){
		if(browsertype.equals("Mozilla"))
		{
			ProfilesIni allprof = new ProfilesIni();
			FirefoxProfile myprof = allprof.getProfile("bheema");
			driver = new FirefoxDriver(myprof);
		}
		if(browsertype.equals("chrome"))
		{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//chromedriver/chromedriver.exe" );
		driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	}
	
	public void navigate(String brURL)
	{
		driver.get(CONFIG.getProperty(brURL));
	}
	public void accounts(String object){
		driver.findElement(By.xpath(OR.getProperty(object))).click();
		
	}
	public void senddetails(String obj, String txt){
		driver.findElement(By.xpath(OR.getProperty(obj))).sendKeys(CONFIG.getProperty(txt));
	}
	public void clicks(String obj)
	{
		driver.findElement(By.xpath(OR.getProperty(obj))).click();
	}
}
