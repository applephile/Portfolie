package main;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoup3 {

	public static void main(String[] args) throws IOException {
		  Document doc = Jsoup.connect("http://www.cgv.co.kr/ticket/").get();
		    // �Ľ��� ����Ʈ�� ����, ��� �±׸� �����´�.


		    Elements posts = doc.body().getElementsByClass("div.movie-select");
		                // sc cs_language_test _sc_language_test�Ӽ��� ��� �±׸� �����´�.      


		    int i=0;
		    for(Element e : posts.select("span.text")){
		    //td �Ӽ� ��Ұ����� �ݺ��ؼ� ���(td�Ӽ� ������ŭ), :not�� ���� align_center class�� td ��Ҵ� ���� (�˸� �κ�)
		      System.out.println(e.text());   
		      System.out.println("|");	//�������� ������ ����
		      i++;
		      if(i==2){
		    	  System.out.println("<br>"); //���������� ���ڿ��� �ٵ���־���.
		        i=0;
		      }

		     }

	}
}
