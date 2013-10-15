package com.telecom.lms.portal.admin.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;

public class PagerTool {
	public static final String PAGE_SIZE = "max";
	public static final String PAGE_NO = "page";
	public static String DEFAULT_PAGE_SIZE;
	public static final String PAGER_FN_NAME = "pagefn";
	
	public static String getPageSize(HttpServletRequest request){
		String size = "";
		if(null==request){
			size = PagerTool.DEFAULT_PAGE_SIZE;
		}else{
			size = request.getParameter(PAGE_SIZE);
		}
		if(size==null||size.equals("")){
			size = PagerTool.DEFAULT_PAGE_SIZE;
		}else{
			try{
				int i = Integer.parseInt(size);
				if(i<=0){
					size = PagerTool.DEFAULT_PAGE_SIZE;
				}
			}catch (Exception e) {
				size = PagerTool.DEFAULT_PAGE_SIZE;
			}
		}
		return size;
	}
	
	public static String getPageNo(HttpServletRequest request){
		String no = "";
		if(null==request){
			no = "1";
		}else{
			no = request.getParameter(PAGE_NO);
		}
		
		if(no==null||no.equals("")){
			no = "1";
		}else{
			try{
				int i = Integer.parseInt(no);
				if(i<=0){
					no = "1";
				}
			}catch (Exception e) {
				no = "1";
			}
		}
		return no;
	}
	
	public static String getPageFunction(HttpServletRequest request){
		return request.getParameter(PAGER_FN_NAME);
	}

	public static String getDEFAULT_PAGE_SIZE() {
		return DEFAULT_PAGE_SIZE;
	}

	public static void setDEFAULT_PAGE_SIZE(String dEFAULT_PAGE_SIZE) {
		DEFAULT_PAGE_SIZE = dEFAULT_PAGE_SIZE;
	}



}
