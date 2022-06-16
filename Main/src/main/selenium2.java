package main;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class selenium2 {
	
	public static final String WEB_DRIVER_ID = "webdriver.chrome.driver"; //����̹� ID
	public static final String WEB_DRIVER_PATH = "D:\\program\\�����Ͽ�\\chromedriver.exe"; //����̹� ���
	
	public static void main(String[] args) {
		//����̹� ����
		try {
			System.setProperty(WEB_DRIVER_ID, WEB_DRIVER_PATH);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		//ũ�� ������ ���� ��ü ����
		ChromeOptions options = new ChromeOptions();
		//�������� ���� ������ �ʰ� ���������� ����.
		//�������� ���� �� ���� ũ�� â�� �����ǰ�, � ������ ����Ǵ��� Ȯ���� �� �ִ�.
		options.addArguments("headless");
		
		//������ ������ �ɼ��� ���� ����̹� ��ü ����
		//�ɼ��� �������� �ʾ��� ������ ���� �����ϴ�.
		//WebDriver��ü�� �� �ϳ��� ������ â�̶� �����Ѵ�.
		WebDriver driver = new ChromeDriver(options);
		
		//�̵��� ���ϴ� url
		String url = "https://www.naver.com";
		
		//WebDriver�� �ش� url�� �̵��Ѵ�.
		driver.get(url);
		
		//������ �̵��� ����� �ε�ð��� ��ٸ���.
		//HTTP����ӵ����� �ڹ��� ������ �ӵ��� �� ������ ������ ���������� 1�ʸ� ����Ѵ�.
		try {Thread.sleep(1000);} catch (InterruptedException e) {}
		
		//class="nav" �� ��� �±׸� ���� WebElement����Ʈ�� �޾ƿ´�.
		//WebElement�� html�� �±׸� ������ Ŭ�����̴�.
		List<WebElement> el1 = driver.findElements(By.className("nav"));
		
		for (int i = 0; i < el1.size(); i++) {
			//nav Ŭ������ ��ü �� "����"��� �ؽ�Ʈ�� ���� WebElement�� Ŭ���Ѵ�.
			if(el1.get(i).getText().equals("����")) {
				el1.get(i).click();
				break;
			}
		}
		
		//1�� ���
		try {Thread.sleep(1000);} catch (InterruptedException e) {}

		//��ư�� Ŭ���߱� ������ �������� ����â���� �̵��� �ִ�.
		//�̵��� ���� â�� IT/���� ���� �������� �����´�.
		
		//iT/���д����� ���� div
		WebElement el2 = driver.findElement(By.id("section_it"));
		
		//div�ӿ��� strong�±׸� ���� ��� element�� �޾ƿ´�.
		List<WebElement> el3 = el2.findElements(By.tagName("strong"));
		
		int count = 0;
		for (int i = 0; i < el3.size(); i++) {
			//������ ������ ��� ����Ѵ�.
			System.out.println(++count + "�� ����: "+ el3.get(i).getText());
		}
		
		
		try {
			//����̹��� null�� �ƴ϶��
			if(driver != null) {
				//����̹� ���� ����
				driver.close(); //����̹� ���� ����
				
				//���μ��� ����
				driver.quit();
			}
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage());
		}
	}
}