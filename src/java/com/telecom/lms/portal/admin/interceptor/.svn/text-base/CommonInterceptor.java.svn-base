package com.telecom.lms.portal.admin.interceptor;

import java.net.URLEncoder;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.portal.admin.service.ConfigInfo;
import com.telecom.lms.portal.admin.util.SessionConstants;

import edu.yale.its.tp.cas.client.filter.CASFilter;

public class CommonInterceptor extends HandlerInterceptorAdapter {
	
	private Logger log = LoggerFactory.getLogger(CommonInterceptor.class);
	@Autowired ConfigInfo config;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		request.setCharacterEncoding("utf-8");
		String[] noFilters = new String[]{"footer.html","login.html","singlelogin.html","logout.html","notlogin","permissionDenied.html"};
		String uri = request.getRequestURI();
		if(request.getQueryString()!=null){
			uri += "?"+request.getQueryString();
		}
		boolean beFilter = true;
		for(String s : noFilters){
			if(uri.indexOf(s) != -1){
				beFilter = false;
				break;
			}
		}
		
		if(beFilter){
			response.setCharacterEncoding("utf-8");
			response.setContentType("text/html;charset=utf-8");
			
			HttpSession session = request.getSession();
			
			String uid = (String)session.getAttribute(CASFilter.CAS_FILTER_USER); //获取用户id
			
			UserInfoBo user = (UserInfoBo) session.getAttribute("user");
			if(StringUtils.isBlank(uid) || user==null){
				//判断有没有登录
				StringBuffer sb = new StringBuffer();
				sb.append(request.getRequestURL());
				if(request.getQueryString()!=null){
					sb.append("?");
					sb.append(request.getQueryString());
				}
//				if(request.getParameter("rq")!=null && request.getParameter("rq").equals("ajax")){
//					//判断是否是ajax请求，通过rq=ajax参数来判断
//					if(request.getParameter("rqtp")!=null && request.getParameter("rqtp").equals("json")){
//						//AJAX请求的是JSON对象
//						String script = "var url = window.location.href;window.top.location ='"+request.getContextPath()+"/page/index.jsp?href=' + encodeURI(url);";
//						response.setContentType("application/json;charset=utf-8");
//						response.getWriter().write("{\"notlogin\":true,\"callback\":\"function tologin(){"+script+"};tologin();\"}");
//					}else{
//						//AJAX请求的是页面
//						response.sendRedirect(request.getContextPath()+"/tologin.jsp");
//					}
//				}else{
//					System.out.println(URLEncoder.encode(sb.toString(), "utf-8"));
//					response.sendRedirect(URLEncoder.encode(sb.toString(), "utf-8"));
//				}
				response.sendRedirect(request.getContextPath()+"/singlelogin.html?href="+URLEncoder.encode(sb.toString(), "utf-8"));
//				response.sendRedirect(request.getContextPath()+"/index.jsp?href="+URLEncoder.encode(sb.toString(), "utf-8"));
				return false;
			}else{
				String superUsers = config.getSuperUsers();
				//超级管理员
				if(superUsers.contains(user.getName())){
					//如果是超级管理员就不做验证
				}else{
					//权限验证
					List<MenuBo> menuList = (List<MenuBo>) request.getSession().getServletContext().getAttribute("context_menuList");
					List<MenuBo> userMenuList = (List<MenuBo>) request.getSession().getAttribute(SessionConstants.SESSION_USER_MENU_LIST);
					
//					log.info("menuList:---------------");
//					log.info(menuList.toString());
//					log.info("userMenuList:---------------");
//					log.info(userMenuList.toString());
					
					//如果没有权限，跳转到提示页面
					if(!checkPermission(menuList, userMenuList, uri)){
						response.setCharacterEncoding("utf-8");
						response.setContentType("text/html;charset=utf-8");
						response.sendRedirect(request.getContextPath() + "/permissionDenied.html");
						return false;
					}
				}
				
			}
		}
		return super.preHandle(request, response, handler);
	}
	
	/**
	 * 
	 * @param menuList 需要做验证的菜单列表
	 * @param list	用户的菜单列表
	 * @param url	当前访问的URL
	 * @return true 有权限访问，false 没有权限访问
	 */
	private boolean checkPermission(List<MenuBo> menuList, List<MenuBo> userMenuList, String url){
		//如果全局菜单为空则有权访问
		if(menuList==null){
			return true;
		}
		//如果全局菜单不为空且用户菜单为空，则无权访问
		if(null!=menuList && null==userMenuList){
			return false;
		}
		
		boolean needCheck = false;
		//判断是否需要做菜单验证
		for(MenuBo menu : menuList){
			if(!StringUtils.isBlank(menu.getUrl()) && !menu.getUrl().equals("#") &&!menu.getUrl().equals("0") && url.indexOf(menu.getUrl())!=-1){
				needCheck = true;
				break;
			}
		}
		if(needCheck){
			//判断用户有没有相应菜单的访问权限
			for(MenuBo menu : userMenuList){
				if(url.indexOf(menu.getUrl())!=-1){
					return true;
				}
			}
		}else{
			return true;
		}
		return false;
	}
	
}
