package com.telecom.lms.portal.admin.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.output.ByteArrayOutputStream;
import org.apache.commons.lang3.StringUtils;

/**
 * @author LuChao
 */
public class CookieUtil {

	public static final String WEB_USER = "user";
	public static final String WEB_NOTICE = "ncid";

	public static final Integer _YEAR = 60 * 60 * 24 * 365;

	/**
	 * 设置cookie
	 * 
	 * @param response
	 * @param name
	 *            cookie名字
	 * @param value
	 *            cookie值
	 * @param maxAge
	 *            cookie生命周期 以秒为单位
	 */
	public static void addCookie(HttpServletResponse response, String name, String value, int maxAge) {
		Cookie cookie = new Cookie(name, value);
		cookie.setPath("/");
		if (maxAge > 0)
			cookie.setMaxAge(maxAge);
		response.addCookie(cookie);
	}

	public static void addCookieSerialize(HttpServletResponse response,String name,Object value,int maxAge) throws Exception{
	    
		ByteArrayOutputStream baos = new  ByteArrayOutputStream();
		ObjectOutputStream oos = new ObjectOutputStream(baos);
		oos.writeObject(value);
		String cookieValue  =  baos.toString( "ISO-8859-1" );
		oos.close();
		baos.close();
		
		String encodedCookieValue  =  java.net.URLEncoder.encode(cookieValue,"UTF-8" );
		Cookie cookie = new Cookie(name,encodedCookieValue);
	    cookie.setPath("/");
	    if(maxAge>0)  cookie.setMaxAge(maxAge);
	    response.addCookie(cookie);
	}
	
	@SuppressWarnings("unchecked")
	public static <T> T getCookieSerialize(HttpServletRequest request, String name) throws Exception{
		Cookie  cookie = getCookieByName(request,name);
		if(cookie==null){ return null;}
		String cookieValue = cookie.getValue();
		 if  (StringUtils.isEmpty(cookieValue)) return null ;
		 
		 String decoderCookieValue  =  java.net.URLDecoder.decode(cookieValue,"UTF-8" );
		 ByteArrayInputStream bais  =   new  ByteArrayInputStream(decoderCookieValue.getBytes( "ISO-8859-1" ));
         ObjectInputStream ios  =   new  ObjectInputStream(bais);
         return  (T) ios.readObject();
	}
	
	

	/**
	 * 根据名字获取cookie
	 * 
	 * @param request
	 * @param name
	 *            cookie名字
	 * @return
	 */
	public static Cookie getCookieByName(HttpServletRequest request, String name) {
		Map<String, Cookie> cookieMap = ReadCookieMap(request);
		if (cookieMap.containsKey(name)) {
			Cookie cookie = (Cookie) cookieMap.get(name);
			return cookie;
		} else {
			return null;
		}
	}

	/**
	 * 将cookie封装到Map里面
	 * 
	 * @param request
	 * @return
	 */
	private static Map<String, Cookie> ReadCookieMap(HttpServletRequest request) {
		Map<String, Cookie> cookieMap = new HashMap<String, Cookie>();
		Cookie[] cookies = request.getCookies();
		if (null != cookies) {
			for (Cookie cookie : cookies) {
				cookieMap.put(cookie.getName(), cookie);
			}
		}
		return cookieMap;
	}
}
