package com.telecom.lms.portal.admin.control.list;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.portal.admin.service.CommonService;
import com.telecom.lms.portal.admin.util.JSNode;
import com.telecom.lms.sdk.service.auth.MenuService;

@Controller
@RequestMapping("/list")

public class MenuListCtr{
	@Autowired MenuService menuService;
	@Autowired CommonService commonService;
	
	@RequestMapping(value="menuList.html",method=RequestMethod.GET)
	@ResponseBody
	public ModelAndView getDepartment(HttpServletRequest request,ModelMap model){
		return new ModelAndView("list/auth/nodeTree",model);
	}
	
	@RequestMapping(value="menu/stulist.html")
	@ResponseBody
	public List<JSNode> list4tree(HttpServletRequest request){
		String upid = request.getParameter("id");
		if("0".equals(upid)){
			upid = "1";
		}
		List<JSNode> list = commonService.getMenuByUpid(upid);
		return list;
	}
}