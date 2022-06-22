package main;

import java.io.IOException;
import java.util.Iterator;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoupClass {
	public static void main(String[] args) {
		String url = "http://www.cgv.co.kr/ticket/";
		Document doc = null;

		try {
			doc = Jsoup.connect(url).get();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Elements element = doc.select("div.movie-select");    

		System.out.println("============================================================");

		Iterator<Element> ie1 = element.select("span.text").iterator();
//		Iterator<Element> ie2 = element.select("strong.title").iterator();
//		Iterator<Element> ie3 = element.select("strong.percent").iterator();
		        
		System.out.println(ie1.next().text());
		
//		while (ie1.hasNext()) {
//			System.out.println(ie1.next().text());
//		}
	
		System.out.println("============================================================");
	}
}
