package main;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class selenium3 {
	private WebDriver driver;
	public static final String WEB_DRIVER_ID = "webdriver.chrome.driver";
	public static final String WEB_DRIVER_PATH = "D:\\program\\�����Ͽ�\\chromedriver.exe";

	public static void main(String[] args) {
		selenium3 cgv = new selenium3();
		WebElement movieDiv = null;
		int rank= 0;
		
		//�ش� �������� �پ��� �ɼ��� �ֱ����� ChromeOptions ��üȭ
		ChromeOptions options = new ChromeOptions();
		//�ɼ� ����
		//headless : ������ ������ ���η� ��ȯ�ȴ�, ���� �Ⱥ��δ�.
		options.addArguments("headless");
		
		//�ü���� ����̹� ����
		System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
		
		//������ �ɼ� ��ü�� ChromeDriver �����ڸ� ���� �����Ѵ�.
		cgv.driver = new ChromeDriver(options);
		
		options.setBinary("/path/to/other/chrome/binary");
		
		
		
		String url = "http://www.cgv.co.kr/movies/";

		//��û�� URL�� get()�� �����ϸ� ����� �������� �������� ���� Ȯ���� �� �ִ�.
		cgv.driver.get(url);
		try {
			//�������� ����Ǵ� �ð��� ��ٷ��ش�.
			Thread.sleep(1000);
		} catch (InterruptedException e) { // �ڹٰ� �����Ͽ򺸴� ���� 1�ʾ��� ��ٷ��ݴϴ�. ������ �����⵵ ���� �±׸� �����ü� �ֱ⋚����
			e.printStackTrace();
		}

		// btn-more-fontbold : �� ���� ��ư Ŭ���� ��
		//�ش� URL���� �� ���� ��ư�� ��ü�� ������ �� click()�� ���� Ŭ�����ش�.
		cgv.driver.findElement(By.className("btn-more-fontbold")).click(); 

		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		// sect-movie-chart : ��ȭ ����� ��� �ִ� div �±� Ŭ���� ��
		//div�±׸� ������ �� movieDiv�� �־��ش�.
		movieDiv = cgv.driver.findElement(By.className("sect-movie-chart"));
		
		//div�±� �ȿ� titleŬ���� �±׸� ���� �����´�.(findElements())      
		for(WebElement el:movieDiv.findElements(By.className("title"))){
			//������ <strong class="title">�±׸� el�� ������� ����ش�.
			//������ �±׾ȿ� �ִ� ����(��� , ������, �ؽ�Ʈ)�� getText()�� ������ �� �ִ�.
			System.out.println(++rank+". "+el.getText());
		}

		cgv.driver.close();
		cgv.driver.quit();

	}
}