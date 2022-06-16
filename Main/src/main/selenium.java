package main;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class selenium {

  public static final String WEB_DRIVER_ID = "webdriver.chrome.driver"; // 드라이버 ID
  public static final String WEB_DRIVER_PATH = "D:\\program\\셀레니움\\chromedriver.exe"; // 드라이버 경로

  public static void main(String[] args) {
    System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);

    ChromeOptions options = new ChromeOptions();
    // 브라우저 보이지 않기
    // options.addArguments("headless");

    WebDriver driver = new ChromeDriver(options);
    driver.get("https://www.google.com/");

    driver.findElement(By.name("q")).sendKeys("아이유");
    driver.findElement(By.name("q")).sendKeys(Keys.ENTER);

    // 브라우저 닫기
    if (driver != null) {
      // driver.close();
      // driver.quit();
    }
  }
}