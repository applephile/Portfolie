package main;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoup2 {

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

		Iterator<Element> ie1 = element.select("strong.rank").iterator();
		Iterator<Element> ie2 = element.select("strong.title").iterator();
		Iterator<Element> ie3 = element.select("strong.percent").iterator();
		
		while (ie3.hasNext()) {
			System.out.println(ie1.next().text()+"\t"+ie2.next().text()+"\t"+ie3.next().text());
		}
		
		System.out.println("============================================================");
	}
}
