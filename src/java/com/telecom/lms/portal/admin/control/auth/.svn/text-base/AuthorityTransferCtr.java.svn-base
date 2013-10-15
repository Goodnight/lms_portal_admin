package com.telecom.lms.portal.admin.control.auth;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import com.telecom.lms.portal.admin.service.CommonService;

import com.telecom.lms.core.bo.auth.*;
import com.telecom.lms.sdk.service.auth.*;

@Controller
@RequestMapping("/auth")
public class AuthorityTransferCtr{
	@Autowired UserRolesService userRolesService;
	@Autowired CommonService commonService;
	
	/**
	 * 权限移交首页
	 */
	@RequestMapping(value = "authorityTransfer.html",method = RequestMethod.GET)
	public ModelAndView authorityTransfer(HttpServletRequest req,HttpServletResponse res,String urId,ModelMap model){
		//urId为空则新建，不为空修改
		if(urId != null){
			UserRolesBo ur = userRolesService.getUserRoles(urId);
			model.put("ur", ur);
		}
		else{
			model.put("ur", new UserRolesBo());
		}
		return new ModelAndView("auth/authorityTransfer",model);
	}
	
	//系统管理员
	@RequestMapping(value = "systemAdmin.html",method = RequestMethod.GET)
	public ModelAndView systemAdmin(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String urId = req.getParameter("urId");
		UserRolesBo ur = userRolesService.getUserRoles(urId);
		model.put("ur", ur);
		return new ModelAndView("auth/systemAdmin",model);
	}
	
	//培训班负责人
	@RequestMapping(value = "classCharge.html",method = RequestMethod.GET)
	public ModelAndView classCharge(HttpServletRequest req,HttpServletResponse res,ModelMap model){
		String urId = req.getParameter("urId");
		UserRolesBo ur = userRolesService.getUserRoles(urId);
		model.put("ur", ur);
		return new ModelAndView("auth/classCharge",model);
	}
}
