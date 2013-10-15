package com.telecom.lms.portal.admin.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class UrlInterceptor extends HandlerInterceptorAdapter{
	
	private @Value("#{url.getUrl}")String getUrl;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		request.setCharacterEncoding("utf-8");
		String uri = request.getRequestURI();
		if(request.getQueryString()!=null){
			uri += "?"+request.getQueryString();
		}
		boolean beFilter = true;
		if(getUrl!=null&&!"".equals(getUrl)){
			String[] lossUrl = getUrl.split("##");
			if(lossUrl.length>0)
			for(String s : lossUrl){
				if(uri.indexOf(s) != -1){
					beFilter = false;
					
				}
			}
		}
		if(!beFilter){
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			response.sendRedirect(request.getContextPath() + "/lossFunction.html");
			return false;
		}
		return super.preHandle(request, response, handler);
	}

}
