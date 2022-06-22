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
		    // 파싱할 사이트를 적어, 모든 태그를 가져온다.


		    Elements posts = doc.body().getElementsByClass("div.movie-select");
		                // sc cs_language_test _sc_language_test속성의 모든 태그를 가져온다.      


		    int i=0;
		    for(Element e : posts.select("span.text")){
		    //td 속성 요소값들을 반복해서 출력(td속성 갯수만큼), :not을 통해 align_center class의 td 요소는 제외 (알림 부분)
		      System.out.println(e.text());   
		      System.out.println("|");	//복잡해져 구분을 위함
		      i++;
		      if(i==2){
		    	  System.out.println("<br>"); //마찬가지로 문자열을 다듬어주었다.
		        i=0;
		      }

		     }

	}
}
